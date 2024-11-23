import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const customerService = {
  getCustomers: () => axios.get(`${API_BASE_URL}/customers`),
  deleteCustomer: (Id) => axios.delete(`${API_BASE_URL}/customers/${Id}`),
};

export default customerService;
