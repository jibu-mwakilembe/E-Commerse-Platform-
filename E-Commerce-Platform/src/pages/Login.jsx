import React, { useState } from "react";
import Header from "../components/Header";
import InputField from "../components/shared/InputField";
import Label from "../components/shared/Label";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted", formData);
    navigate("/");
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
            <div className="mt-5">
              <Label htmlFor="email" text="Email" />

              <InputField
                type="email"
                placeholder="example@gmail.com"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <Label htmlFor="password" text="Password" />

              <InputField
                type="password"
                id="password"
                required
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <button className="bg-blue-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
