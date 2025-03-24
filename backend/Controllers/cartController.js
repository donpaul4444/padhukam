import cartModel from "../models/CartModel.js";
import productModel from "../models/productModel.js";

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    const product = await productModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    let cart = await cartModel.findOne({ userId });
    if (!cart) {
      cart = new cartModel({ userId, items: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    return res
      .status(200)
      .json({ success: true, message: "Item added to cart", cart });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await cartModel
      .findOne({ userId })
      .populate({ path: "items.productId" });

    if (!cart) {
      return res.status.json({ success: false, message: "Cart is empty" });
    }
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};


const removeFromCart = async (req,res)=>{
  try {
    const {productId}= req.body
    const userId = req.user.id

    const cart = await cartModel.findOne({userId})
    if(!cart){
      return res.status.json({success:false, message:"Cart not found"})
    }
    cart.items = cart.items.filter((item)=>item.productId.toString() !== productId)
    
   await cart.save()
   
   return res.status(200).json({
    success:true,
    message:"Product removed from cart",
    cart,
   })
  } catch (error) {
    console.error("Error removing from cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
}
export { addToCart, getCart ,removeFromCart};
