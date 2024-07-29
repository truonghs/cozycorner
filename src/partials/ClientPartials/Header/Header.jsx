import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  const location = useLocation();
  return (
    <div className="bg-transparent flex items-center justify-center sticky top-0">
      <div className="flex items-center justify-between w-[1200px]">
        <div className="flex-[0.7]">
          <Link to={"/"}>
            <img className="w-[100px] " src="./logo.png"></img>
          </Link>
        </div>
        <div className=" pt-6 flex items-center justify-around flex-[4] px-8">
          <Link to={"/"}>
            <div
              className={
                location.pathname === "/"
                  ? "font-semibold text-xl text-orange-dark  decoration-orange-dark underline underline-offset-8  "
                  : "font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150 "
              }
            >
              Trang chủ
            </div>
          </Link>
          <Link to={"/"}>
            <div className="font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150">Menu</div>
          </Link>
          <Link to={"/"}>
            <div className="font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150">Tin tức</div>
          </Link>
          <Link to={"/"}>
            <div className="font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150">Liên hệ</div>
          </Link>
        </div>

        <div className="  pt-6 flex-[2] flex items-center justify-around">
          <div className="flex flex-1 border-[1px] border-gray-dark border-solid rounded px-4 py-2 gap-2 justify-between">
            <input className="outline-none bg-[transparent]" />
            <IoSearch size={24} />
          </div>
        </div>
        <div className="  pt-6 flex-1 flex items-center justify-around">
          <div className="flex-1 flex items-center justify-end gap-4">
            <FaRegBell size={24} />
            <BiFoodMenu size={24} />
          </div>
        </div>
        <div className=" pt-6 flex-[0.5] flex items-center justify-around">
          <Link to={"/user"}>
            <Avatar>
              <AvatarImage src="https://accounts.google.com/SignOutOptions?hl=vi&continue=https://gemini.google.com/u/0/app&ec=GBRAkgU" />
              <AvatarFallback>CC</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
