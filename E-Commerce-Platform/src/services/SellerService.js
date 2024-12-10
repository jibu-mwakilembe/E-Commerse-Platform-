import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const sellersService = {
  getSellers: () => axios.get(`${API_BASE_URL}/sellers`),
  deleteSeller: (id) => axios.delete(`${API_BASE_URL}/sellers/${id}`),
  getSellerProfitChart: () => axios.get(`${API_BASE_URL}/seller-profit-data`),
};

export default sellersService;
