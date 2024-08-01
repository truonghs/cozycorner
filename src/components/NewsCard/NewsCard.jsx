import React from "react";
import { Link } from "react-router-dom";

function NewsCard() {
  return (
    <div className="desktop:w-96 w-48 max-w-96 group  bg-off-white tablet:rounded-[16px] rounded-lg overflow-hidden pb-2 shadow-sm shadow-black/20 mb-2">
      <div className="relative">
        <div className="z-50 absolute top-1 left-1 bg-yellow px-2 rounded-md text-white font-semibold tablet:text-base text-xs">01/08/2024</div>
        <div className="tablet:rounded-[16px] rounded-lg overflow-hidden ">
          <img className="group-hover:scale-110 duration-500" src={require("@/images/cake.webp")} alt="news image" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center tablet:gap-4 gap-2 tablet:mt-4 mt-2 px-2">
        <div className="line-clamp line-clamp-1 ">
          <Link className="hover:text-yellow-dark duration-300 laptop:text-2xl tablet:text-lg text-base font-bold" to={"/"}>
            Croissant ngàn lớp - đa dạng cách thưởng thức
          </Link>
        </div>
        <div className="w-28 h-0 border-2 rounded-full border-yellow"></div>
        <div className="justify line-clamp-3 line-clamp font-semibold laptop:text-lg tablet:text-base text-xs">
          Tart trứng là loại bánh đường phố nổi tiếng ở Hong Kong được rất nhiều người yêu thích. Không những thế, trong bảng xếp hạng 50 loại món ăn ngon. Tart trứng là loại bánh đường phố nổi tiếng
          ở Hong Kong được rất nhiều người yêu thích. Không những thế, trong bảng xếp hạng 50 loại món ăn ngon
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
