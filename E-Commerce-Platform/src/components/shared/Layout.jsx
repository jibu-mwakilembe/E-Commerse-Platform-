import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex h-screen   ">
        <Sidebar />
        <div className="flex-1 overflow-auto">{<Outlet />}</div>
      </div>
    </>
  );
}

export default Layout;
