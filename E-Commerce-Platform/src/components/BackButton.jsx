import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function BackButton({ backTitle, backLink }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(backLink)}
        className="px-4 py-2 flex items-center gap-4 text-gray-700 font-semibold "
      >
        <div className="px-4 py-2 bg-white flex hover:bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <IoIosArrowBack />
        </div>
        {backTitle}
      </button>
    </div>
  );
}

export default BackButton;
