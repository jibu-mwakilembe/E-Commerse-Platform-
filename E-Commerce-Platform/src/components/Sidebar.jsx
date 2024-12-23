import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import Header from "./Header";
import Search from "./shared/Search";
import { MdArrowDropDown, MdClose, MdMenu } from "react-icons/md";
import { GoPeople, GoPerson } from "react-icons/go";
import { BiCategoryAlt, BiDotsVertical } from "react-icons/bi";
import { CiLock, CiLogin } from "react-icons/ci";
import useAuthStore from "../store/authStore";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

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
  const navigate = useNavigate();
  const { user, clearUser } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const authUser = useAuthUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const classLink =
    "flex items-center gap-2 font-light px-3 py-2  hover:no-underline  rounded-md text-base transition-all";

  return (
    <div className="flex h-screen">
      <button
        className="absolute top-4 left-2 z-20 bg-blue-600 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <MdMenu size={20} placeholder="open menu" />
        ) : (
          <MdClose size={20} />
        )}
      </button>

      {isSidebarOpen && (
        <div className="flex flex-col w-65 p-1 bg-[#1B1C1E] text-white h-screen overflow-y-auto">
          <div className="flex items-center gap-2 px-14 py-3">
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
                        ? "text-white bg-blue-600 hover:bg-blue-600 "
                        : "text-neutral-400 hover:bg-gray-700",
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
                        ? "text-white bg-blue-600 hover:bg-blue-600 "
                        : "text-neutral-400 hover:bg-gray-700",
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
                  ? "text-white bg-blue-600 hover:bg-blue-600 "
                  : "text-neutral-400 hover:bg-gray-700",
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
                  ? "text-white bg-blue-600 hover:bg-blue-600 "
                  : "text-neutral-400 hover:bg-gray-700",
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
                  ? "text-white bg-blue-600 hover:bg-blue-600 "
                  : "text-neutral-400 hover:bg-gray-700",
                classLink
              )}
            >
              <GoPerson />
              <span className="text-xl">Sellers</span>
            </Link>
          </div>
          <div className="flex flex-col gap-0.5 mt-10  ">
            <div className="">
              <h1 className="text-base mb-2">PROFILE</h1>
              {user ? (
                <div className="flex gap-2 hover:bg-gray-700 rounded-md  p-2">
                  <div className="h-10 w-10 rounded-full bg-gray-500 "></div>
                  <div className="flex-1">
                    <h1 className="text-white text-[12px]">
                      {user?.authUserState?.name}
                    </h1>
                    <p className="font-roboto text-[10px] text-stone-500  font-semibold ">
                      {user?.authUserState?.email || "No Email"}
                    </p>
                  </div>
                  <div className=" flex items-center justify-center">
                    <BiDotsVertical />
                  </div>
                </div>
              ) : (
                <p className="text-neutral-400">No user logged in</p>
              )}
            </div>
            <div
              onClick={handleLogout}
              className=" flex  items-center justify-center hover:bg-gray-700 rounded-md gap-2   p-2 "
            >
              <CiLogin />
              <span className="">Logout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
