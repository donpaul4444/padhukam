import mongoose from "mongoose"

const otpSchema = new mongoose.Schema({
    email:String,
    otp:String,
    expiresAt: { type: Date, default: () => Date.now() + 5 * 60 * 1000 },
})

const Otp = mongoose.model("Otp", otpSchema);

export default Otp
