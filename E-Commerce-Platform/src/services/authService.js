import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const login = async (email, password) => {
  const response = await axios.get(`${API_BASE_URL}/login`, {
    params: {
      email,
      password,
    },
  });

  if (response.data.length > 0) {
    return response.data[0];
  }

  throw new Error("Invalid password or email");
};

export default { login };
