import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import Header from "./Header";
import Search from "./shared/Search";
import { MdArrowDropDown } from "react-icons/md";
import { GoPeople, GoPerson } from "react-icons/go";
import { BiCategoryAlt, BiDotsVertical } from "react-icons/bi";
import { CiLock, CiLogin } from "react-icons/ci";

import {
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineFolderAdd,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";

function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const classLink =
    "flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-700 hover:no-underline active:bg-blue-600 rounded-md text-base";

  return (
    <div className="flex flex-col w-60 p-1 bg-[#1B1C1E] text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <Header />
      </div>
      <div className=" gap-2">
        <Search
          inputclass="flex border border-[#4E4F51] bg-[#4E4F51]"
          placeholder="search "
          searchclass="flex bg-[#4E4F51] "
        />
      </div>
      <div className="mt-5">MENU</div>
      <div className="flex-1 py-0 flex flex-col gap-0.5 mt-3">
        <button onClick={toggleDropdown} className={classLink}>
          <HiOutlineViewGrid />
          <span className="flex-1 text-base"> Overview</span>
          <MdArrowDropDown />
        </button>
        {isOpen && (
          <ul className="ml-3">
            <li>
              <Link
                to="/"
                className={classNames(
                  pathname === "/"
                    ? "text-white bg-blue-600 hover:bg-blue-600 active:bg-blue-600"
                    : "text-neutral-400 ",
                  classLink
                )}
              >
                <BiCategoryAlt />
                <span className="text-[15px]">Transactions</span>
              </Link>
            </li>

            <li>
              <Link
                to="/conversation"
                className={classNames(
                  pathname === "/conversation"
                    ? "text-white bg-blue-600 hover:bg-blue-600 active:bg-blue-600"
                    : "text-neutral-400",
                  classLink
                )}
              >
                <CiLock />
                <span className="text-[15px] ">Conversion & Retention</span>
              </Link>
            </li>
          </ul>
        )}

        <Link
          to="/product"
          className={classNames(
            pathname === "/product"
              ? "text-white bg-blue-600 hover:bg-blue-600 active:bg-blue-600"
              : "text-neutral-400",
            classLink
          )}
        >
          <HiOutlineCube />
          <span className="text-base">Product</span>
        </Link>

        <Link
          to="/customers"
          className={classNames(
            pathname === "/customers"
              ? "text-white bg-blue-600 hover:bg-blue-600 active:bg-blue-600"
              : "text-neutral-400",
            classLink
          )}
        >
          <GoPeople />
          <span className="text-base">Customers</span>
        </Link>

        <Link
          to="/sellers"
          className={classNames(
            pathname === "/sellers"
              ? "text-white bg-blue-600 hover:bg-blue-600 active:bg-blue-600"
              : "text-neutral-400",
            classLink
          )}
        >
          <GoPerson />
          <span className="text-xl">Sellers</span>
        </Link>
      </div>
      <div className="flex flex-col gap-0.5  ">
        <div className="">
          <h1 className="text-base mb-2">PROFILE</h1>
          <div className="flex gap-2 hover:bg-gray-700 rounded-md  p-2">
            <div className="h-10 w-10 rounded-full bg-gray-500 "></div>
            <div className="flex-1">
              <h1 className="text-white text-[12px]">JOHN MWAKILEMBE</h1>
              <p className="font-roboto text-[10px] text-stone-500  font-semibold ">
                jibumwakilembe@gmail.com
              </p>
            </div>
            <div className=" flex items-center justify-center">
              <BiDotsVertical />
            </div>
          </div>
        </div>
        <div className=" flex  items-center justify-center hover:bg-gray-700 rounded-md gap-2   p-2 ">
          <CiLogin />
          <span className="">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
