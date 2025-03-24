import OrderModel from "../models/OrderModel.js";
import CartModel from"../models/CartModel.js";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto"
dotenv.config(); // Load environment variables


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  
  // ✅ 1️⃣ API to Create Order
  export const createOrder = async (req, res) => {
    try {
      const { amount, currency, receipt } = req.body;
  
      const options = {
        amount: amount * 100, // Convert to smallest currency unit (paise)
        currency,
        receipt,
        payment_capture: 1, // Auto-capture payment
      };
  
      const order = await razorpay.orders.create(options);
  
      if (!order) {
        return res.status(500).json({ success: false, message: "Order creation failed" });
      }
  
      res.json(order);
    } catch (error) {
      console.error("❌ Error creating Razorpay order:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  

  export const placeOrder = async (req, res) => {
    try {
      const userId = req.user.id;
      const { items, totalPrice, gstAmount, paymentMethod, address, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
  
      // 🔹 Validation
      if (!userId || !items.length || !totalPrice || !paymentMethod || !address) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
  
      // 🔹 If online payment, verify Razorpay signature
      if (paymentMethod !== "COD") {
        if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
          return res.status(400).json({ success: false, message: "Missing payment details" });
        }
  
        const secret = process.env.RAZORPAY_SECRET;
        const expectedSignature = crypto
          .createHmac("sha256", secret)
          .update(`${razorpayOrderId}|${razorpayPaymentId}`)
          .digest("hex");
  
        if (expectedSignature !== razorpaySignature) {
          return res.status(400).json({ success: false, message: "Invalid payment signature" });
        }
      }
  
      // 🔹 Save Order
      const newOrder = new OrderModel({
        userId,
        items,
        totalPrice,
        gstAmount,
        paymentMethod,
        address,
        status: paymentMethod === "COD" ? "Pending" : "Completed",
      });
  
      await newOrder.save();
      await CartModel.findOneAndUpdate({ userId }, { $set: { items: [] } });
  
      res.status(200).json({ success: true, message: "Order placed successfully", order: newOrder });
    } catch (error) {
      console.error("Error placing order:", error);
      res.status(500).json({ success: false, message: "Server error", error });
    }
  };




export const getUserOrders=async(req,res)=>{
    try {
        const userId=req.user.id
        const orders=await OrderModel.find({userId}).sort({createdAt:-1})
        req.status(200).json({success:true,orders})
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    }
}