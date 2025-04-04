import express from "express"
import morgan from "morgan"; 
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/mongodb.js";
import userRouter from "./Routes/userRoutes.js";
import adminRouter from "./Routes/adminRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
console.log("🚀 Starting backend app...");

dotenv.config();

const app= express()
const PORT = process.env.PORT || 5000;
connectDB()
connectCloudinary()

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.send("Backend is running...")
})

app.use("/api/user",userRouter)
app.use("/api/admin",adminRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    
})