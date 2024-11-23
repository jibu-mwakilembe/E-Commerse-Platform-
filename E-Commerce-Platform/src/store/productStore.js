import { create } from "zustand";
import productService from "../services/ProductService";

const useProductstore = create((set) => ({
  productList: [],
  filteredProducts: [],
  purchasedProduct: [],
  isLoading: false,
  error: null,
  selectedProduct: null,
  searchQuery: "",

  fetchProduct: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await productService.getProducts();
      set({
        productList: response.data,
        filteredProducts: response.data,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Failed to fethc product", isLoading: false });
    }
  },

  getProductById: (id) => {
    set((state) => ({
      selectedProduct:
        state.productList.find((product) => product.id === id) || null,
    }));
  },

  searchProduct: (query) => {
    set((state) => {
      const filteredProducts = query
        ? state.productList.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          )
        : state.productList;
      return { searchQuery: query, filteredProducts: filteredProducts };
    });
  },
  setPurchasedProduct: () => {
    set((state) => {
      const purchasedProduct = state.productList.slice(1, 3);
      return { purchasedProduct: purchasedProduct };
    });
  },
}));

export default useProductstore;
