import productModel from "../models/productModel.js";

const getProducts = async (req,res)=>{
try {
  const products = await productModel.find();
  res.status(200).json({success:true,products})
} catch (error) {
  res.status(500).json({ success: false, message: "Failed to fetch products", error });
}
}


const getProductDetails = async(req,res)=>{
  try {
    const productId= req.params.id
    const productdetail= await productModel.findById(productId)
    return res.status(200).json({success:true, product:productdetail})
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export {getProducts, getProductDetails };
