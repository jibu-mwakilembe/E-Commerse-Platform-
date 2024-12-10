import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const productService = {
  getProducts: () => axios.get(`${API_BASE_URL}/products`),
  getProductById: (id) =>
    axios.get(`${API_BASE_URL}/products-purchased?id=${id}`),
  getSellerProductById: (id) =>
    axios.get(`${API_BASE_URL}/seller-products?id=${id}`),
};

export default productService;
