import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex flex-row min-h-screen   overflow-hidden">
        <Sidebar />
        <div className="flex-1">{<Outlet />}</div>
      </div>
    </>
  );
}

export default Layout;
