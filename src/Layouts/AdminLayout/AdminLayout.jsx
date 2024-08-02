import Header from "@/partials/AdminPartials/Header/Header";
import SideBar from "@/partials/AdminPartials/SideBar/SideBar";
import React from "react";

function AdminLayout({ children }) {
  return (
    <div className="flex justify-start">
      <SideBar />
      <div className="ml-72 flex-1 h-screen bg-bg-admin">
        <Header />
        <div className="mt-[114px]">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
