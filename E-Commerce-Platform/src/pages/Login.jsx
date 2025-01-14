import React, { useState } from "react";
import Header from "../components/Header";
import Label from "../components/shared/Label";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import PasswordField from "../components/PasswordField";
import authService from "../services/authService";
import useAuthStore from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await authService.login(
        formData.email,
        formData.password
      );

      setUser(userData.authUserState, userData.token);

      const role = userData.authUserState.role;
      if (role === "admin") {
        navigate("/");
      } else if (role === "customer") {
        navigate("/customers");
      } else if (role === "seller") {
        navigate("/sellers");
      } else {
        throw new Error("Unauthorized role");
      }
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="ml-10 mt-10">
          <Header />
        </div>

        <div className="flex-grow flex items-center justify-center ">
          <form
            className="bg-white-500 mt-10 w-[500px] border rounded-md p-3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-neutral-950 text-[20px] font-robot font-semibold ">
              Log in to ShopKonekt
            </h1>
            <p className="font-roboto text-[10px] text-stone-500  font-semibold ">
              Please enter your email and password to sign into the system.
            </p>
            {error && <p className="text-red-500 mt-5 ">{error}</p>}
            <div className="mt-5">
              <Label htmlFor="email" text="Email" />

              <TextField
                type="email"
                fullWidth
                placeholder="example@gmail.com"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <Label htmlFor="password" text="Password" />

              <PasswordField
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-5">
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
              {/* <button className="bg-blue-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
                
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
