import { create } from "zustand";
import productService from "../services/ProductService";

const useProductstore = create((set) => ({
  productList: [],
  filteredProducts: [],
  purchasedProduct: [],
  sellerProducts: [],
  isLoading: false,
  error: null,
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

  fetchPurchasedProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await productService.getProductById(id);
      set({
        purchasedProduct: response.data,
        filteredProducts: response.data,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Failed to search purchased product", isLoading: false });
    }
  },

  searchPurchasedProduct: (query) => {
    set((state) => {
      const filteredProducts = query
        ? state.purchasedProduct.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          )
        : state.purchasedProduct;
      return { searchQuery: query, filteredProducts: filteredProducts };
    });
  },

  fetchSellerProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await productService.getSellerProductById(id);
      set({
        sellerProducts: response.data,
        filteredProducts: response.data,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Failed to search seller products", isLoading: false });
    }
  },

  searchSellerProduct: (query) => {
    set((state) => {
      const filteredProducts = query
        ? state.sellerProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          )
        : state.sellerProducts;
      return { searchQuery: query, filteredProducts: filteredProducts };
    });
  },
}));

export default useProductstore;
