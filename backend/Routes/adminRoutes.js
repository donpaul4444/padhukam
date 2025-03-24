import express from "express"
import { getProducts } from "../Controllers/productController.js"
import { addProduct } from "../Controllers/adminController.js"
import upload from "../middleware/multerConfig.js"

const adminRouter = express.Router()

adminRouter.post("/addproduct",upload.fields([{name:'image1',maxcount:1},{name:'image2',maxcount:1},{name:'image3',maxcount:1},{name:'image4',maxcount:1}]),addProduct)
adminRouter.get("/getproducts",getProducts)

export default adminRouter