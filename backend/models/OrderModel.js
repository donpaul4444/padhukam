import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    gstAmount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["Card", "UPI", "COD"],
      required: true,
    },
    address: {
      fullName: String,
      addreessLine: String,
      city: String,
      state: String,
      postalCode: String,
      mobile: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);


export default mongoose.model("order",OrderSchema)