import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    console.log("re.files:",req.files);
    
    const { name, brand, price, category, type, size, quantity } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      brand,
      category,
      type,
      size,
      quantity,
      price: Number(price),
      image: imagesUrl,
      date: Date.now(),
    };
    console.log("productData:", productData);
    const product = new productModel(productData);
    await product.save();

    res.json({success:true, message:"Product Added"})
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

export {addProduct}