/* eslint-disable @typescript-eslint/no-explicit-any */
// import gpaylogo from "../../assets/logos/gpay.png";
// import visalogo from "../../assets/logos/Visa_Logo 1 (1).png";
// import mastercardlogo from "../../assets/logos/mastercard.png";
// import Downarrow from "../../assets/images/Down-arrow.png";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import { useEffect, useRef, useState } from "react";
import { getAddresses, placeOrder } from "../../services/userService";
import { toast } from "react-toastify";
// import RazorpayButton from "../../components/RazorpayHandler";
import RazorpayHandler from "../../components/RazorpayHandler";

interface cartItem {
  productId: {
    _id: string;
    name: string;
    price: number;
    image: string[];
  };
  quantity: number;
}

const CheckOut = () => {
  const navigate = useNavigate();
  const { storeCart, clearCart } = useCartStore();
  const razorpayRef = useRef<{ open: () => void }>(null);

  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("Card");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await getAddresses();
        if (response?.success) {
          setSelectedAddress(
            response.addresses.find((addr: any) => addr.isDefault) || response.addresses[0]
          );
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };
    fetchAddresses();
  }, []);

  const subtotal = storeCart.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );
  const gstAmount = subtotal * 0.18;
  const totalPrice = subtotal + gstAmount;

  const orderData = {
    items: storeCart.map((item) => ({
      productId: item.productId._id,
      quantity: item.quantity,
    })),
    totalPrice,
    gstAmount,
    paymentMethod,
    address: selectedAddress,
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address");
      return;
    }

    if (paymentMethod === "COD") {
      const response = await placeOrder(orderData);
      if (response.success) {
        clearCart();
        navigate("/order-complete", { replace: true });
      } else {
        toast.error("Order failed. Please try again.");
      }
    } else {
      if (razorpayRef.current) {
        console.log("not cod");
        
        razorpayRef.current.open();
      } else {
        console.log("Razorpay is not ready yet");
      }
    }
  };

  const handlePaymentSuccess = (paymentResponse: any) => {
    console.log("Payment Successful!", paymentResponse);
    toast.success("Payment successful!");
    clearCart();
    navigate("/order-complete", { replace: true });
  };

  return (
    <div className="px-20 flex gap-20">
      <div className="w-[1200px]">
        <div className="w-full border-b border-black my-2 mb-4 "></div>
        <p className="text-3xl font-semibold mb-4">Your Cart</p>
        <div className="flex justify-between">
          <div className="flex gap-4 py-4">
            {storeCart.map((val: cartItem) => (
              <div key={val.productId._id} className="border border-black p-2 w-[150px] h-[150px]">
                <img src={val.productId.image[0]} alt="" className="w-32 h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end" style={{ color: "#522B00" }}>
          Edit Cart
        </div>
        <div className="w-full border-b border-black my-2 mb-4 "></div>

        {/* Delivery Address */}
        <div>
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-bold mb-2">Delivery Address</p>
              {selectedAddress ? (
                <div>
                  <p className="text-gray-400">Default</p>
                  <p>Name: {selectedAddress.fullName}</p>
                  <p>Address: {selectedAddress.addressLine}</p>
                  <p>City: {selectedAddress.city}</p>
                  <p>State: {selectedAddress.state}</p>
                  <p>Postal Code: {selectedAddress.postalCode}</p>
                  <p>Mobile: {selectedAddress.mobile}</p>
                </div>
              ) : (
                <p className="text-red-500">No address found! Please add an address.</p>
              )}
            </div>
          </div>
          <div className="flex justify-end items-center gap-2">
            <div style={{ color: "#522B00" }}>Change</div>
          </div>
          <div className="w-full border-b border-black my-2"></div>
        </div>

        {/* Payment Method */}
        <div className="h-[190px] mt-5">
          <p className="text-2xl font-bold">Payment Method</p>
          <p className="mb-4">Select any payment method</p>
          <div className="flex gap-4 items-center mt-2">
            <input type="radio" checked={paymentMethod === "Card"} onChange={() => setPaymentMethod("Card")} />
            <label>Debit Card / Credit Card</label>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <input type="radio" checked={paymentMethod === "UPI"} onChange={() => setPaymentMethod("UPI")} />
            <label>UPI Method</label>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <input type="radio" checked={paymentMethod === "COD"} onChange={() => setPaymentMethod("COD")} />
            <label>Cash On Delivery</label>
          </div>
        </div>
        <div className="w-full border-b border-black mb-10"></div>

        {/* Place Order Button */}
        <button className="bg-black text-white text-3xl rounded-lg w-[400px] h-[70px]" onClick={handlePlaceOrder}>
          Place your order
        </button>
        
        <RazorpayHandler ref={razorpayRef} orderData={orderData} onSuccess={handlePaymentSuccess} />
      </div>

      {/* Order Summary */}
      <div className="flex-1 flex flex-col gap-5">
        <div style={{ backgroundColor: "#FCFAFA" }} className="shadow-md flex flex-col gap-5 py-5">
          <p className="flex justify-center text-2xl">ORDER SUMMARY</p>
          <div className="flex justify-between px-4">
            <p className="text-xl">{storeCart.length} ITEMS</p>
            <p className="text-xl">₹ {subtotal}</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl">Delivery Charges</p>
            <p className="text-xl">Free</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-xl">GST Amount</p>
            <p className="text-xl">₹ {gstAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-2xl font-semibold">TOTAL</p>
            <p className="text-2xl font-semibold">₹ {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
