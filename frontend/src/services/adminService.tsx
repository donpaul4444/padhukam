import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const addProduct = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/addproduct`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/getproducts`);
    return data.products;
  } catch (error) {
    console.error("Loading data failed..",error);
  }
};
