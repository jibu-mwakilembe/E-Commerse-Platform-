import { create } from "zustand";
import sellersService from "../services/SellerService";

const useSellerStore = create((set) => ({
  sellerList: [],
  isLoading: false,
  error: null,
  selectedSeller: null,

  fetchSellers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await sellersService.getSellers();
      set({ sellerList: response.data, isLoading: false });
    } catch (error) {
      set({ error: "Failed to load sellers", isLoading: false });
    }
  },

  getSellerById: (id) => {
    set((state) => ({
      selectedSeller:
        state.sellerList.find((seller) => seller.Id === id) || null,
    }));
  },
}));

export default useSellerStore;
