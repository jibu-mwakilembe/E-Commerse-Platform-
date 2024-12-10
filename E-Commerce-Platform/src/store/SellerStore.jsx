import { create } from "zustand";
import sellersService from "../services/SellerService";

const useSellerStore = create((set) => ({
  sellerList: [],
  filtedSellers: [],
  sellerProfitDataChart: [],
  isLoading: false,
  error: null,
  selectedSeller: null,
  searchQuery: "",

  fetchSellers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await sellersService.getSellers();
      set({
        sellerList: response.data,
        filtedSellers: response.data,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Failed to load sellers", isLoading: false });
    }
  },

  fetchProfitData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await sellersService.getSellerProfitChart();
      set({
        sellerProfitDataChart: response.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: "Failed to load data for the profit chart",
        isLoading: false,
      });
    }
  },

  getSellerById: (id) => {
    set((state) => ({
      selectedSeller:
        state.sellerList.find((seller) => seller.id === id) || null,
    }));
  },

  searchSeller: (query) => {
    set((state) => {
      const filtedSellers = query
        ? state.sellerList.filter(
            (seller) =>
              seller.name.toLowerCase().includes(query.toLowerCase()) ||
              seller.email.toLowerCase().includes(query.toLowerCase())
          )
        : state.sellerList;
      return { searchQuery: query, filtedSellers: filtedSellers };
    });
  },

  deleteSeller: async (id) => {
    try {
      await sellersService.deleteSeller(id);
      set((state) => ({
        sellerList: state.sellerList.filter((seller) => seller.id !== id),
        filtedSellers: state.filtedSellers.filter((seller) => seller.id !== id),
      }));
      console.log(`Sdller with ${id} is deleted Successfully `);
    } catch (error) {
      set({ error: "Failed to delete Seller" });
    }
  },
}));

export default useSellerStore;
