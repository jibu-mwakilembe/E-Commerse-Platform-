import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ placeholder, inputclass, searchclass, onChange }) => {
  return (
    <div>
      <div className={` items-center   rounded-md p-1 max-w-sm ${searchclass}`}>
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder={placeholder}
          className={`"text-sm  focus:outline-none active:outline-none  w-full " ${inputclass}`}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
