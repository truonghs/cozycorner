import React from "react";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiNewspaperLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="flex-1 h-screen bg-white fixed w-72">
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="">
          <div className="flex flex-col items-center">
            <img className="max-w-[60px] desktop:max-w-[90px]" alt="logo" src={"../logo.png"} />
            <div className="text-3xl font-bold text-orange-dark">Cozy Corner</div>
          </div>
          <div className="mt-10 flex flex-col gap-8 px-8 font-semibold">
            <Link
              to={"/admin"}
              className="flex items-center justify-start gap-4 text-xl opacity-70 hover:opacity-100 select-none hover:cursor-pointer hover:bg-orange/20 hover:text-orange px-4 py-2 rounded-lg"
            >
              <AiOutlineDashboard />
              <div>Dashboard</div>
            </Link>
            <div className="flex items-center justify-start gap-4 text-xl opacity-70 hover:opacity-100 select-none hover:cursor-pointer hover:bg-orange/20 hover:text-orange px-4 py-2 rounded-lg">
              <AiOutlineUser />
              <div>Users</div>
            </div>
            <Link
              to={"/admin/products"}
              className="flex items-center justify-start gap-4 text-xl opacity-70 hover:opacity-100 select-none hover:cursor-pointer hover:bg-orange/20 hover:text-orange px-4 py-2 rounded-lg"
            >
              <IoFastFoodOutline />
              <div>Menu</div>
            </Link>
            <div className="flex items-center justify-start gap-4 text-xl opacity-70 hover:opacity-100 select-none hover:cursor-pointer hover:bg-orange/20 hover:text-orange px-4 py-2 rounded-lg">
              <BiFoodMenu />
              <div>Orders</div>
            </div>
            <div className="flex items-center justify-start gap-4 text-xl opacity-70 hover:opacity-100 select-none hover:cursor-pointer hover:bg-orange/20 hover:text-orange px-4 py-2 rounded-lg">
              <RiNewspaperLine />
              <div>News</div>
            </div>
            <div className="flex items-center justify-start gap-4 text-xl opacity-70 hover:opacity-100 select-none hover:cursor-pointer hover:bg-orange/20 hover:text-orange px-4 py-2 rounded-lg">
              <ImProfile />
              <div>Profile</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-4">
          <div className="bg-orange text-white max-w-full px-4 py-4 rounded-xl mb-4 flex items-center justify-center gap-3">
            <img className="w-10 h-10 rounded-full" src={require("@/images/facebook.png")} alt="avt" />
            <div className="w-full">
              <div className="max-w-[170px] truncate text-ellipsis font-bold text-lg">Cozy Corner</div>
              <div className="max-w-[170px] truncate text-ellipsis">admin@cozycorner.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
