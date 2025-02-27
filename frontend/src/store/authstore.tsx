import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: unknown; // Replace 'any' with a proper user type if available
  isLoggedIn: boolean;
  login: (token: string, user: unknown) => void; // Replace 'any' with a proper user type
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isLoggedIn: !!localStorage.getItem("token"),

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
}));

export default useAuthStore;
