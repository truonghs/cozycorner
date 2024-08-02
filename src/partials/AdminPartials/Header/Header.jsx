import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Header({ title }) {
  return (
    <div className="bg-bg-admin  py-8 flex items-center gap-20 px-10 fixed">
      <div className="text-orange-dark font-bold text-3xl h-[30px] ">Header Title</div>
      <div className="w-fit  h-12 bg-white rounded-full flex items-center justify-between border-solid border-[1px] border-gray/50 overflow-hidden duration-300 hover:shadow-lg">
        <input className="outline-none ml-4 w-fit min-w-96 rounded-full text-lg" placeholder="Search here..." />
        <div className="px-4 text-xl text-off-white hover:text-orange hover:cursor-pointer">
          <FaMagnifyingGlass />
        </div>
      </div>
    </div>
  );
}

export default Header;
