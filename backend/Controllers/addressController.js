import AddressModel from "../models/AddressModel.js";

const addAddress =async(req,res)=>{
try {
    const userId= req.user.id
    const {fullName,addressLine,city,state,postalCode,mobile,isDefault}= req.body;

    const existingAddress = await AddressModel.find({userId})
    const newAddress = new AddressModel({
        userId,
        fullName,
        addressLine,
        city,
        state,
        postalCode,
        mobile,
        isDefault:existingAddress.length === 0,
    })
    await newAddress.save()
    res.status(200).json({success:true,message:"address added successfully",address:newAddress})
} catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
}
}


const getUserAddresses = async(req,res)=>{
try {
    const userId= req.user.id
    const addresses=await AddressModel.find({userId})
    if(addresses){
        res.status(200).json({success:true,addresses})
    }else{
        res.status(404).json({success:false,message:"No Addresses"})
    }
} catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
}
}



const setDefaultAddress =async(req,res)=>{
    try {
        const {addressId}=req.body
        const userId= req.user.id

        await AddressModel.updateMany({userId},{isDefault:false})

        const updatedAddress= await AddressModel.findByIdAndUpdate(addressId,{isDefault:true},{new:true})
        res.status(200).json({ success: true, message: "Default address updated", address: updatedAddress });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}



const deleteAddress = async(req,res)=>{
    try {
        const {addressId}= req.body;
        const address = await AddressModel.findById(addressId)

        if(address.isDefault){
return res.status(200).json({success:false,message:"Cannot delete the default address"})
        }
        await AddressModel.findByIdAndDelete(addressId)
        res.status(200).json({success:true,message:"Address deleted successfully"})
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}
export {addAddress, getUserAddresses, setDefaultAddress,deleteAddress}