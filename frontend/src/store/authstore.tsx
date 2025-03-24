import { create } from "zustand";
import {jwtDecode} from "jwt-decode"

interface AuthState {
  token: string | null;
  user: unknown;
  isLoggedIn: boolean;
  login: (token: string, user: unknown) => void;
  logout: () => void;
}

const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return null;
    }
    return token;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const useAuthStore = create<AuthState>((set) => {
  const token = getToken();
  const user = token
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null;

  return {
    token,
    user,
    isLoggedIn: !!token,

    login: (token, user) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      set({ token, user, isLoggedIn: true });
    },

    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ token: null, user: null, isLoggedIn: false });
    },
  };
});

export default useAuthStore;
