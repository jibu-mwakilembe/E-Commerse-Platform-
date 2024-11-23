import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@mui/material";

function BackButton({ backTitle, backLink }) {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-2 flex items-center gap-4 text-gray-700 font-semibold ">
      <Button
        onClick={() => navigate(backLink)}
        color="black"
        startIcon={<IoIosArrowBack />}
      >
        {backTitle}
      </Button>
    </div>
  );
}

export default BackButton;
