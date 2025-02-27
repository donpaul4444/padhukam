import axios from "axios";

const API_URI = "http://localhost:5000/api/user";

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
