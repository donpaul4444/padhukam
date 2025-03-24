import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    fullName:{type:String,required:true},
    addressLine:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    postalCode:{type:String,required:true},
    mobile:{type:String,required:true},
    isDefault:{type:Boolean,default:false}
})

const AddressModel = mongoose.model("address",addressSchema)
export default AddressModel