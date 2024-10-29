import React from "react";

const InputField = ({ type, placeholder, id, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      name={name}
      required
      className="bg-gray-50 border border-gray-300 focus:outline-none active:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 "
    />
  );
};

export default InputField;
