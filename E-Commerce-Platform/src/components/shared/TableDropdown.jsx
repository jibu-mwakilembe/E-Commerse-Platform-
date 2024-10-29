import React from "react";
import { MdArrowDropDown } from "react-icons/md";

function TableDropdown({ name }) {
  return (
    <div>
      <div className="w-32 flex items-center border  rounded-md p-1 bg-white  ">
        <span className="flex-1 ml-2">{name}</span>
        <MdArrowDropDown />
      </div>
    </div>
  );
}

export default TableDropdown;
