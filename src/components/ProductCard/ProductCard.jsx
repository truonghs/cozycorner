import React from "react";
import Badge from "../Badge/Badge";
import { FaMagnifyingGlass, FaBasketShopping } from "react-icons/fa6";
function ProductCard() {
  return (
    <div className="mobile:w-[220px] w-[46vw] flex flex-col items-center justify-center bg-off-white rounded-[14px] pb-2 shadow-sm shadow-black/20 mb-2">
      <div className="relative">
        <div className="absolute mobile:top-2 mobile:left-2 top-1 left-0.5 flex flex-col mobile:gap-2 gap-0">
          <Badge value={"-25%"} className={"bg-red"}></Badge>
          <Badge value={"new"} className={"bg-yellow"}></Badge>
        </div>
        <div className="group relative mobile:w-[220px] w-[46vw] mobile:h-[220px] h-[46vw] overflow-hidden rounded-[14px]">
          <img className="z-1 w-full hover:scale-110 duration-200" loading="lazy" src={require("@/images/cake.webp")} />
          <div className="z-10 h-10 w-full absolute group-hover:bottom-2 bottom-[-40px] duration-300 ">
            <div className=" flex opacity-0 group-hover:opacity-100 duration-300 items-center justify-center gap-2">
              <div className="p-2 rounded-full bg-orange flex items-center justify-center hover:opacity-70 hover:cursor-pointer">
                <FaMagnifyingGlass className=" text-white text-xl" />
              </div>
              <div className="p-2 rounded-full bg-orange flex items-center justify-center  hover:opacity-70 hover:cursor-pointer">
                <FaBasketShopping className="text-white text-xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-semibold mobile:text-lg text-sm max-w-full truncate text-ellipsis px-3">Bánh Chiffon Trà Xanh</div>
      <div className="font-semibold text-[#006400] mobile:text-base text-xs">36.000đ</div>
    </div>
  );
}

export default ProductCard;
