import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const sellersService = {
  getSellers: () => axios.get(`${API_BASE_URL}/sellers`),
};

export default sellersService;
