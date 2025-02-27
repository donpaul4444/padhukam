import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
import Otp from "../models/otpModel.js";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ success:false, message: "Please signup" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success:false, message: "Invalid Password" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: { id: existingUser._id, email: existingUser.email },
    });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};

const sendotp = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "donpaul4444@gmail.com", // Your Gmail
      pass: process.env.OTP_APP_PASS, // App password
    },
  });

  try {
    const { email } = req.body;

    const otp = otpGenerator.generate(6, {
      upperCase: false,
      specialChars: false,
    });
    console.log("otp:", otp);
    await Otp.create({ email, otp });

    const mailOptions = {
      from: "donpaul4444@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is : ${otp}`,
    };
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

const verifyotp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const existingOtp = await Otp.findOne({ email, otp });

    if (!existingOtp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    if (existingOtp.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    res.json({ success: true, message: "OTP Verified successsfully" });
  } catch (error) {
    res.status(500).json({ sucess: false, message: "somethign went wrong" });
  }
};

const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received email:", email);
    console.log("Received password:", password);

    const existingUser = await userModel.findOne({ email });
    console.log("Existing user:", existingUser);
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    console.log("Generated salt:", salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed password:", hashedPassword);

    const newUser = new userModel({ email, password: hashedPassword });
    await newUser.save();
    console.log("New user saved successfully!");
    res
      .status(200)
      .json({ success: true, message: "User registered successfully!.." });
  } catch (error) {
    res.status(500).json({ sucess: false, message: "Server error" });
  }
};

const sampleUser = async (req, res) => {
  try {
    const { email, pass } = req.body;
    console.log(email, pass);

    res.status(200).json({success:true,message:"good"})
  } catch (error) {
    console.log(error);
    
  }
};

export { loginUser, sendotp, verifyotp, signupUser,sampleUser };
