import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addAddress } from '../../services/userService'

const UserAddAddress = () => {
const navigate = useNavigate()
    const [formData,setFormData] =useState({
        fullname:"",
        addressLine:"",
        city:"",
        state:"",
        postalCode:"",
        mobile:"",
    })
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        const response = await addAddress(formData)
        if(response?.success){
            navigate("/useraccount/address")
        }
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold text-center mb-4">Add New Address</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input 
        name="fullName" 
        placeholder="Full Name" 
        onChange={handleChange} 
        required 
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input 
        name="addressLine" 
        placeholder="Address Line" 
        onChange={handleChange} 
        required 
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input 
        name="city" 
        placeholder="City" 
        onChange={handleChange} 
        required 
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input 
        name="state" 
        placeholder="State" 
        onChange={handleChange} 
        required 
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input 
        name="postalCode" 
        placeholder="Postal Code" 
        onChange={handleChange} 
        required 
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <input 
        name="mobile" 
        placeholder="Mobile Number" 
        onChange={handleChange} 
        required 
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit" 
        className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition">
        Add Address
      </button>
    </form>
  </div>

  )
}

export default UserAddAddress
