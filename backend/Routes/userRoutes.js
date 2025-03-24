import express from 'express'
import { loginUser,sendotp, signupUser, verifyotp } from '../Controllers/userController.js'
import authmiddleware from '../middleware/authMiddleware.js'
import { getProductDetails } from '../Controllers/productController.js'
import { addToCart, getCart, removeFromCart } from '../Controllers/cartController.js'
import { addAddress, deleteAddress, getUserAddresses, setDefaultAddress } from '../Controllers/addressController.js'
import { createOrder, placeOrder } from '../Controllers/orderController.js'

const userRouter =express.Router()

userRouter.post('/login',loginUser)
userRouter.post('/signup',signupUser)
userRouter.post('/sendotp',sendotp)
userRouter.post('/verifyotp',verifyotp)
userRouter.post("/addcart",authmiddleware,addToCart)
userRouter.get("/cart",authmiddleware,getCart)
userRouter.post("/removecart",authmiddleware,removeFromCart)
userRouter.post("/addaddress",authmiddleware,addAddress)
userRouter.get("/addresses",authmiddleware,getUserAddresses)
userRouter.put("/addresses/setdefault",authmiddleware,setDefaultAddress)
userRouter.delete("/addresses/delete",authmiddleware,deleteAddress)
userRouter.get("/product/:id",getProductDetails)
userRouter.post("/placeorder",authmiddleware,placeOrder)
userRouter.post("/createorder",createOrder)
export default userRouter