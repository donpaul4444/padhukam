import { useEffect, useState } from "react";
import addaddressicon from "../../assets/icons/material-symbols_add-circle.png";
import { NavLink } from "react-router-dom";
import { deleteAddress, getAddresses, setDefaultAddress } from "../../services/userService";
import { toast } from "react-toastify";

interface Address {
  _id: string;
  fullName: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  mobile: string;
  isDefault: boolean;
}

const UserAddress = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const data = await getAddresses();
      if (data?.success) {
        setAddresses(data?.addresses);
      }
    };
    fetchAddresses();
  }, []);

  const handleSetDefault =async(addressId:string)=>{
    const data=await setDefaultAddress(addressId)
    if(data.success){
      setAddresses((prev)=>prev.map((addr)=>({
        ...addr,isDefault:addr._id === addressId
      })))
    }
  }

const handleDelete= async(addressId:string)=>{
const data = await deleteAddress(addressId)
if (data?.success){
  setAddresses((prev)=>prev.filter((addr)=>addr._id !== addressId))
}else{
  toast.error(data?.message);
}
}
  return (
    <div>
      <p className="text-2xl font-bold ">Manage Addresses</p>
      <p className="text-gray-400 mb-8 text-xl">
        Here You can manage the addresses,You can Add or delete the
        addresses
      </p>
      <div className="flex flex-col gap-8 w-[80%] ">
        <NavLink to="/useraccount/addaddress">
          <div className="flex gap-4 border  shadow-md items-center  h-[60px] pl-4 bg-[#F0E0CE]">
            <img src={addaddressicon} alt="" className="w-8 h-8" />
            <p className="text-xl">Add New Address</p>
          </div>
        </NavLink>
        {/* Address Block */}
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div
              key={address._id}
              className="flex gap-4 border  shadow-md  pl-4 pt-1 justify-between"
            >
              <div className="p-2">
                {address.isDefault && (
                  <p className="bg-black rounded-lg text-white px-1 text-sm w-[60px] flex justify-center">
                    Default
                  </p>
                )}
                <p>Name: {address.fullName}</p>
                <p>Address: {address.addressLine}</p>
                
                <p>City: {address.city}</p>
                <p>State: {address.state}</p>
                <p>Postal Code: {address.postalCode}</p>
                <p>Mobile: {address.mobile}</p>
              </div>

              <div className="flex items-end  gap-2 p-2">
                {!address.isDefault && (
                  <button
                    style={{ color: "#522B00" }}
                    className="border-r px-2  border-black"
                    onClick={(()=>handleSetDefault(address._id))}
                  >
                    Make Default
                  </button>
                )}

                <button style={{ color: "#522B00" }} className="px-2 border-black" onClick={()=>handleDelete(address._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-500">
            No addresses found. Add a new address.
          </p>
        )}

      </div>
    </div>
  );
};

export default UserAddress;
