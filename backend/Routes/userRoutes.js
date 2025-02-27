import express from 'express'
import { loginUser, sampleUser, sendotp, signupUser, verifyotp } from '../Controllers/userController.js'
import authmiddleware from '../middleware/authMiddleware.js'

const userRouter =express.Router()

userRouter.post('/login',loginUser)
userRouter.post('/signup',signupUser)
userRouter.post('/sendotp',sendotp)
userRouter.post('/verifyotp',verifyotp)
userRouter.get("/sample",authmiddleware,sampleUser)

export default userRouter