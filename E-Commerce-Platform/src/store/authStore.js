import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,

  setUser: (user, token) => {
    set({ user, token, isLoggedIn: true }),
      console.log("sidebar user state", user);
  },

  clearUser: () => {
    set({ user: null, token: null, isLoggedIn: false });
  },
}));

export default useAuthStore;
