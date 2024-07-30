import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Drawer, DrawerOverlay, DrawerPortal, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Header() {
  const location = useLocation();
  return (
    <>
      <div className="bg-brown/15 flex items-center justify-center sticky top-0 shadow-lg shadow-brown-500/50 pb-2">
        <div className="flex flex-1 items-center justify-between lg:max-w-[1200px] max-w-full gap-3 lg:px-0 px-2">
          <div className="lg:flex-[0.5] md:flex-[0.2] flex-[0.2]">
            <Link className=" flex-1 " to={"/"}>
              <img className="max-w-[60px] lg:max-w-[90px]" src="./logo.png" />
            </Link>
          </div>
          <div className="lg:flex pt-3 hidden items-center justify-around flex-[3.6]  ">
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

          <div className="pt-3 lg:flex-[2.3] md:flex-[1.3] flex-1 flex items-center justify-around">
            <div className="flex flex-1 border-[1px] border-gray-dark border-solid rounded  lg:px-4 lg:py-2  px-[4px] py-[2px] gap-2 justify-between items-center">
              <input className="w-full bg-[transparent] outline-none" />
              <IoSearch className="lg:text-2xl text-lg" />
            </div>
          </div>
          <div className="  pt-3 lg:flex-[0.5] md:flex-[0.2] flex-[0.1] flex items-center justify-center">
            <div className="flex-1 flex items-center justify-center gap-4">
              <div className="relative">
                <BiFoodMenu className=" md:text-2xl text-lg" />
                <div className="absolute rounded-full top-[-6px] right-[-6px] bg-red lg:text-sm text-xs lg:w-4 lg:h-4 w-3.5 h-3.5 text-white flex items-center justify-center">1</div>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden pt-3 lg:flex-[0.5] items-center justify-around ">
            <Link to={"/user"}>
              <Avatar>
                <AvatarImage src="https://accounts.google.com/SignOutOptions?hl=vi&continue=https://gemini.google.com/u/0/app&ec=GBRAkgU" />
                <AvatarFallback>CC</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <div className="lg:hidden flex pt-3 md:flex-[0.1] flex-[0.07] items-center justify-around">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <div className="rounded-full border border-black border-solid select-none hover:cursor-pointer">
                  <IoMdMenu className=" md:text-2xl text-lg" />
                </div>
              </DrawerTrigger>
              <DrawerPortal>
                <DrawerOverlay className="fixed inset-0 bg-black/40" />
                <DrawerContent className=" inset-x-0 bg-transparent  justify-end flex flex-col rounded-t-[10px] outline-none h-full md:w-[40vw] sm:w-[50vw] w-[60vw] mt-24 fixed bottom-0 right-0 border-none after:hidden">
                  <div className="p-4 bg-bg-main flex-1 h-full">
                    <div className="max-w-md mx-auto pt-[70px] flex flex-col justify-between h-full">
                      <div className="flex pt-3 items-center justify-around flex-col gap-6 h-fit">
                        <Link to={"/"}>
                          <div
                            className={
                              location.pathname === "/"
                                ? "font-semibold text-xl text-orange-dark decoration-orange-dark underline underline-offset-8  "
                                : "font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150 "
                            }
                          >
                            Trang chủ
                          </div>
                        </Link>
                        <Link to={"/"}>
                          <div className="font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150">
                            Menu
                          </div>
                        </Link>
                        <Link to={"/"}>
                          <div className="font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150">
                            Tin tức
                          </div>
                        </Link>
                        <Link to={"/"}>
                          <div className="font-semibold text-xl hover:text-orange-dark decoration-[transparent] hover: decoration-orange-dark hover:underline underline-offset-8 hover:duration-150">
                            Liên hệ
                          </div>
                        </Link>
                      </div>
                      <div className="flex flex-col items-center gap-6">
                        <Link to={"/user"}>
                          <Avatar className="w-24 h-24">
                            <AvatarImage src="https://accounts.google.com/SignOutOptions?hl=vi&continue=https://gemini.google.com/u/0/app&ec=GBRAkgU" />
                            <AvatarFallback>CC</AvatarFallback>
                          </Avatar>
                        </Link>
                        <div className="flex gap-4 flex-wrap">
                          <Button asChild className="bg-red hover:bg-red/80 flex-1 w-full min-w-[100px]">
                            <Link className="w-full" to="/login">
                              Đăng nhập
                            </Link>
                          </Button>
                          <Button asChild className="bg-bg-blue hover:bg-bg-blue/80 flex-1 w-full min-w-[100px]">
                            <Link className="w-full" to="/register">
                              Đăng ký
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </DrawerPortal>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
