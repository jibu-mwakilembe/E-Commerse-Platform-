import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const customerService = {
  getCustomers: () => axios.get(`${API_BASE_URL}/customers`),
  deleteCustomer: (id) => axios.delete(`${API_BASE_URL}/customers/${id}`),
  getCommentById: (id) =>
    axios.get(`${API_BASE_URL}/customers-comment?id=${id}`),
};

export default customerService;
