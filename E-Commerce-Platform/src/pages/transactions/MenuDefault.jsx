import { MdArrowDropDown } from "react-icons/md";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function MenuDefault({ item_type, items = [] }) {
  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-white border border-gray-500 flex gap-3 items-center">
          <div className="">
            <span className="text-gray-500">{item_type}</span>
          </div>
          <div className="text-gray-500">
            <MdArrowDropDown />
          </div>
        </Button>
      </MenuHandler>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
