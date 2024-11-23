import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const productService = {
  getProducts: () => axios.get(`${API_BASE_URL}/products`),
};

export default productService;
