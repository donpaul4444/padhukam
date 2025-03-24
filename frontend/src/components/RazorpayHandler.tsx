import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";

interface RazorpayHandlerProps {
  orderData: any;
  onSuccess: (response: any) => void;
}

const RazorpayHandler = forwardRef(({ orderData, onSuccess }: RazorpayHandlerProps, ref) => {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openRazorpay = async () => {
    if (!razorpayLoaded) {
      console.log("Razorpay script not loaded yet");
      return;
    }

    try {
      // 1️⃣ Send request to backend to create Razorpay order
      const response = await axios.post(`http://localhost:5000/api/user/createorder`, {
        amount: orderData.totalPrice,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      if (!response.data.id) {
        throw new Error("Failed to create Razorpay order");
      }

      const { id: order_id, currency } = response.data;

      // 2️⃣ Configure Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: orderData.totalPrice * 100,
        currency,
        name: "Your Store",
        description: "Order Payment",
        order_id,
        handler: async function (paymentResponse: any) {
          console.log("Payment Successful!", paymentResponse);

          // 3️⃣ Send payment details to backend for verification & order placement
          const finalOrderData = { 
            ...orderData, 
            razorpayPaymentId: paymentResponse.razorpay_payment_id, 
            razorpayOrderId: paymentResponse.razorpay_order_id, 
            razorpaySignature: paymentResponse.razorpay_signature 
          };

          const verifyResponse = await axios.post(`http://localhost:5000/api/user/placeorder`, finalOrderData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });

          if (verifyResponse.data.success) {
            onSuccess(verifyResponse.data);
          } else {
            console.log("❌ Payment Verification Failed", verifyResponse.data);
          }
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log("Error in Razorpay Payment", error);
    }
  };

  useImperativeHandle(ref, () => ({
    open: openRazorpay,
  }));

  return null;
});

export default RazorpayHandler;
