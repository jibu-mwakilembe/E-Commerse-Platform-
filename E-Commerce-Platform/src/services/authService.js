import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.message || "Login failed");
  }
};

export default { login };
