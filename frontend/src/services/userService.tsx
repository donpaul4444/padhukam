import axios from "axios";

const API_URI = import.meta.env.VITE_API_URL

export const loginUser = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`${API_URI}/login`, { email, password });
    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};

export const sendOtp = async (email: string) => {
  try {
    const { data } = await axios.post(`${API_URI}/sendotp`, { email });
    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to send OTP");
  }
};

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const { data } = await axios.post(`${API_URI}/verifyotp`, { email, otp });
    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "OTP verification failed");
  }
};

export const signUpUser = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`${API_URI}/signup`, { email, password });
    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Signup failed");
  }
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProductdetails = async (id:any) => {
  try {
    const { data } = await axios.get(`${API_URI}/product/${id}`);
    return data.product;
  } catch (error) {
    console.error("Loading data failed..",error);
  }
};

export const addToCart = async (data: { productId: string; quantity: number }) => {
  const token = localStorage.getItem("token"); 
  if (!token) {
    console.error("No token found in localStorage! User might not be logged in.");
    return;
  }
try {
  return await axios.post(
    `${API_URI}/addcart`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in the Authorization header
      },
    }
  );
} catch (error) {
  console.error("Error while adding to cart:", error);
  throw error; 
}
  
};


export const getCart = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found in localStorage! User might not be logged in.");
    return;
  }

  try {
    const response = await axios.get(`${API_URI}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("API Response:", response);
    return response;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

export const removeCart =async (productId:string)=>{
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found in localStorage! User might not be logged in.");
    return;
  }

  try {
    const response= await axios.post(`${API_URI}/removecart`,{productId},{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })

    
    return response.data
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null
  }
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addAddress = async (addressData:any)=>{
  try {
    const token = localStorage.getItem("token")
    const response = await axios.post(`${API_URI}/addaddress`,addressData,{
      headers:{Authorization:`Bearer ${token}`}
    })
    return response.data
  } catch (error) {
    console.error("Error adding address:", error);
    return null;
  }
}

export const getAddresses =async()=>{
try {
  const token= localStorage.getItem("token");
  const response=await axios.get(`${API_URI}/addresses`,{
    headers:{Authorization:`Bearer ${token}`}
  })
  return response.data
} catch (error) {
  console.error("Error fetching addresses:", error);
  return null;
}
}


export const setDefaultAddress= async (addressId:string)=>{
  try {
    const token= localStorage.getItem("token")
  const response = await axios.put(`${API_URI}/addresses/setdefault`,{addressId},{
    headers:{Authorization:`Bearer ${token}`}
  })
  return response.data
  } catch (error) {
    console.error("Error setting default address:", error);
    return null
  }
  
}

export const deleteAddress = async (addressId: string) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.delete(`${API_URI}/addresses/delete`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { addressId }, 
    });

    return response.data;
  } catch (error) {
    console.error("Error deleting address:", error);
    return null;
  }
};

export const placeOrder =async(orderData:unknown)=>{
  try {
    const token = localStorage.getItem("token");
    const response=await axios.post(`${API_URI}/placeorder`,orderData,{
      headers:{Authorization:`Bearer ${token}`}
    })
    return response?.data
  } catch (error) {
    return { success: false, message: error };
  }
}


