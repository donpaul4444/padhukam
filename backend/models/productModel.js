import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    type:{type:String, required:true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true},
    brand:{type:String, required:true},
    size:{type:Number, required:true},
    image:{type:Array, required:true},
    date:{type:Number, required:true},

})

const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel