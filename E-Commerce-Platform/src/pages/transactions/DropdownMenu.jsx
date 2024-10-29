import React from "react";
import { Dropdown } from "flowbite-react";
import { MdArrowDropDown } from "react-icons/md";

export default function DropdownMenu({}) {
  return (
    <Dropdown
      label={
        <div className="flex bg-gray-500 w-full">
          <span className="text-gray-700 flex-1 ">Select an option</span>
          <MdArrowDropDown />
        </div>
      }
      dismissOnClick={false}
    >
      <Dropdown.Item>one</Dropdown.Item>
    </Dropdown>
  );
}
