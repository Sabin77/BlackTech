import Sidebar from "@/components/Admin/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className=" text-black">
        <div className="  flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
