import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TbPackageExport } from "react-icons/tb";
import { RiRefund2Line, RiCustomerService2Fill, RiBankLine } from "react-icons/ri";
import ProductCard from "@/components/ProductCard/ProductCard";
import NewsCard from "@/components/NewsCard/NewsCard";
export default function Home() {
  return (
    <div className=" bg-bg-main">
      <div>
        <Carousel
          opts={{
            loop: true,
            playOnInit: true,
            duration: 100,
          }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false }), Fade()]}
        >
          <CarouselContent>
            <CarouselItem className="pl-0 ">
              <div className={`bg-[url("@/images/banner-0.jpg")] bg-cover bg-center w-full h-[56vw] relative flex items-center justify-center`}>
                <div className="w-[1200px] hidden laptop:flex laptop:justify-center laptop:items-start desktop:justify-start desktop:items-center desktop:scale-100 scale-75 select-none">
                  <div className="laptop:h-60 laptop:w-96 bg-white/70 absolute p-5">
                    <div className="border-solid border-orange-dark border h-full w-full py-6 px-5 flex flex-col items-start justify-between">
                      <div className="font-bold text-[40px] font-dancing leading-[42px]">Nguyên liệu tươi mới</div>
                      <div className="text-xl font-dancing font-semibold">Giảm đến 20% khi đặt hàng qua web</div>
                      <Button asChild className="bg-[transparent] border-black border-solid border hover:border-brown hover:bg-brown hover:text-white" variant={{ outline: "black" }}>
                        <Link to="/" className="text-base">
                          Xem ngay
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0 ">
              <div className={`bg-[url("@/images/banner-1.jpg")] bg-cover bg-center w-full h-[56vw] relative flex items-center justify-center`}>
                <div className="w-[1200px] hidden laptop:flex laptop:justify-center laptop:items-start desktop:justify-start desktop:items-center desktop:scale-100 scale-75 select-none">
                  <div className="laptop:h-60 laptop:w-96 bg-white/70 absolute p-5">
                    <div className="border-solid border-orange-dark border h-full w-full py-6 px-5 flex flex-col items-start justify-between">
                      <div className="font-bold text-[40px] font-dancing leading-[42px]">Đầy đủ dinh dưỡng</div>
                      <div className="text-xl font-dancing font-semibold">Giảm đến 20% khi đặt hàng qua web</div>
                      <Button asChild className="bg-[transparent] border-black border-solid border hover:border-brown hover:bg-brown hover:text-white" variant={{ outline: "black" }}>
                        <Link to="/" className="text-base">
                          Xem ngay
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0 ">
              <div className={`bg-[url("@/images/banner-2.jpg")] bg-cover bg-center w-full h-[56vw] relative flex items-center justify-center`}>
                <div className="w-[1200px] hidden laptop:flex laptop:justify-center laptop:items-start desktop:justify-start desktop:items-center desktop:scale-100 scale-75 select-none">
                  <div className="laptop:h-60 laptop:w-96 bg-white/70 absolute p-5">
                    <div className="border-solid border-orange-dark border h-full w-full py-6 px-5 flex flex-col items-start justify-between">
                      <div className="font-bold text-[40px] font-dancing leading-[42px]">Món ngon mỗi ngày</div>
                      <div className="text-xl font-dancing font-semibold">Giảm đến 20% khi đặt hàng qua web</div>
                      <Button asChild className="bg-[transparent] border-black border-solid border hover:border-brown hover:bg-brown hover:text-white" variant={{ outline: "black" }}>
                        <Link to="/" className="text-base">
                          Xem ngay
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0 ">
              <div className={`bg-[url("@/images/banner-3.jpg")] bg-cover bg-center w-full h-[56vw] relative flex items-center justify-center`}>
                <div className="w-[1200px] hidden laptop:flex laptop:justify-center laptop:items-start desktop:justify-start desktop:items-center desktop:scale-100 scale-75 select-none">
                  <div className="laptop:h-60 laptop:w-96 bg-white/70 absolute p-5">
                    <div className="border-solid border-orange-dark border h-full w-full py-6 px-5 flex flex-col items-start justify-between">
                      <div className="font-bold text-[40px] font-dancing leading-[42px]">Món ăn gia đình</div>
                      <div className="text-xl font-dancing font-semibold">Giảm đến 20% khi đặt hàng qua web</div>
                      <Button asChild className="bg-[transparent] border-black border-solid border hover:border-brown hover:bg-brown hover:text-white" variant={{ outline: "black" }}>
                        <Link to="/" className="text-base">
                          Xem ngay
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center items-center  mobile:px-4 px-1 desktop:mt-14 laptop:mt-12 tablet:mt-8 mobile:mt-4 mt-2">
        <div className="w-desktop flex items-center justyfi-start overflow-x-scroll no-scrollbar">
          <Carousel opts={{ dragFree: true }} className="  desktop:w-desktop w-screen">
            <CarouselContent className="desktop:w-desktop pl-2 w-screen">
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="flex justify-between items-center select-none w-full gap-2  bg-off-white shadow-sm shadow-black/20 py-1 px-2 rounded-md my-1">
                  <TbPackageExport className="text-5xl text-orange" />
                  <div className="w-full">
                    <div className="font-semibold mobile:text-lg text-base">Miễn phí vận chuyển</div>
                    <div className="max-w-[240px] mobile:text-base text-sm">Áp dụng free ship cho tất cả đơn hàng từ 300 nghìn</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="flex justify-between items-center select-none w-full gap-2  bg-off-white shadow-sm shadow-black/20 py-1 px-2 rounded-md my-1">
                  <RiRefund2Line className="text-5xl text-orange" />
                  <div className="w-full">
                    <div className="font-semibold mobile:text-lg text-base">Đổi trả dễ dàng</div>
                    <div className="max-w-[240px] mobile:text-base text-sm">Đổi ngay trong ngày nếu như bánh không đúng yêu cầu</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="flex justify-between items-center select-none w-full gap-2  bg-off-white shadow-sm shadow-black/20 py-1 px-2 rounded-md my-1">
                  <RiCustomerService2Fill className="text-5xl text-orange" />
                  <div className="w-full">
                    <div className="font-semibold mobile:text-lg text-base">Hỗ trợ nhanh chóng</div>
                    <div className="max-w-[240px] mobile:text-base text-sm">Gọi Hotline: 19000000 để được hỗ trợ ngay</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="flex justify-between items-center select-none w-full gap-2  bg-off-white shadow-sm shadow-black/20 py-1 px-2 rounded-md my-1">
                  <RiBankLine className="text-5xl text-orange" />
                  <div className="w-full">
                    <div className="font-semibold mobile:text-lg text-base">Thanh toán đa dạng</div>
                    <div className="max-w-[240px] mobile:text-base text-sm">Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản</div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/* <div className="flex justify-center items-center  mobile:px-4 px-1 desktop:mt-14 laptop:mt-12 tablet:mt-8 mobile:mt-4 mt-2">
        <div className="w-desktop flex items-center justyfi-start overflow-x-scroll no-scrollbar">
          <Carousel opts={{ dragFree: true }} className="  desktop:w-desktop w-screen">
            <CarouselContent className="desktop:w-desktop pl-2 w-screen">
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="relative  select-none w-full shadow-sm shadow-black/20 my-1 flex flex-col justify-center items-center ">
                  <img src={require("@/images/grill.jpg")} alt="grill" />
                  <div className="absolute bottom-0 bg-white/40 w-full flex flex-col items-center">
                    <div className="text-black font-dancing font-bold text-4xl">Món nướng</div>
                    <div>Xem ngay</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="flex justify-between items-center select-none w-full gap-2  bg-off-white shadow-sm shadow-black/20 py-1 px-2 rounded-md my-1">
                  <RiRefund2Line className="text-5xl text-orange" />
                  <div className="w-full">
                    <div className="font-semibold mobile:text-lg text-base">Đổi trả dễ dàng</div>
                    <div className="max-w-[240px] mobile:text-base text-sm">Đổi ngay trong ngày nếu như bánh không đúng yêu cầu</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="flex justify-between items-center select-none w-full gap-2  bg-off-white shadow-sm shadow-black/20 py-1 px-2 rounded-md my-1">
                  <RiCustomerService2Fill className="text-5xl text-orange" />
                  <div className="w-full">
                    <div className="font-semibold mobile:text-lg text-base">Hỗ trợ nhanh chóng</div>
                    <div className="max-w-[240px] mobile:text-base text-sm">Gọi Hotline: 19000000 để được hỗ trợ ngay</div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="laptop:basis-1/3 desktop:basis-1/4 tablet:basis-1/2 pl-0 mobile:basis-1/2 basis-1/1 pl-2">
                <div className="flex justify-between items-center select-none w-full gap-2  bg-off-white shadow-sm shadow-black/20 py-1 px-2 rounded-md my-1">
                  <RiBankLine className="text-5xl text-orange" />
                  <div className="w-full">
                    <div className="font-semibold mobile:text-lg text-base">Thanh toán đa dạng</div>
                    <div className="max-w-[240px] mobile:text-base text-sm">Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản</div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div> */}
      <div className="flex items-center justify-center desktop:mt-14 laptop:mt-12 mobile:mt-8 mobile:mt-4 mt-2">
        <div className="desktop:max-w-[1200px] max-w-full flex justify-center items-center flex-col mobile:border-red mobile:border-[6px] rounded-md mobile:border-solid mobile:py-2 mobile:px-6 py-1 px-2 bg-[#ffd6b8]">
          <div className="font-dancing laptop:text-7xl text-4xl font-bold text-red">Món đang giảm giá</div>
          <div className="mt-4">
            <img className="tablet:scale-100 scale-75" src={require("@/images/separate.webp")} alt="" />
          </div>
          <div className="w-full tablet:mt-10 mt-6 rounded-[14px] overflow-hidden">
            <Carousel opts={{ dragFree: true }} className=" w-full select-none ">
              <CarouselContent className="w-full relative ">
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/5 laptop:basis-1/4 tablet:basis-1/3 mobile:basis-1/3 tablet:scale-100 mobile:scale-75 scale-100 basis-1/2 ">
                  <ProductCard />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className={"absolute top-[50%] left-0 bg-yellow text-white border-black"} />
              <CarouselNext className={"absolute top-[50%] right-0 bg-yellow text-white border-black"} />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center desktop:mt-14 laptop:mt-12 mobile:mt-8 mobile:mt-4 mt-2">
        <div className="desktop:max-w-[1200px] max-w-full flex justify-center items-center flex-col mobile:border-orange-dark mobile:border-[6px] rounded-md mobile:border-solid mobile:py-2 mobile:px-6 py-1 px-2 bg-off-white">
          <div className="font-dancing laptop:text-7xl text-4xl font-bold  text-orange-dark">Được mua nhiều nhất</div>
          <div className="mt-4">
            <img className="mobile:scale-100 scale-75" src={require("@/images/separate.webp")} alt="separate" />
          </div>
          <div className="w-full mobile:mt-10 mt-6 flex gap-2 flex-wrap items-start justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="flex justify-center max-w-full">
        <div className="desktop:w-desktop max-w-full flex justify-center items-center flex-col">
          <div className="flex items-center flex-col justify-center mt-10 mb-6">
            <div className="font-dancing laptop:text-7xl text-4xl font-bold ">Tin tức mới nhất</div>
            <div className="mt-4">
              <img className="mobile:scale-100 scale-75" src={require("@/images/separate.webp")} alt="separate" />
            </div>
          </div>
          <div className=" tablet:mt-10 mt-6 max-w-full">
            <Carousel opts={{ dragFree: true }} className=" w-full select-none rounded-[8px] overflow-hidden pl-2">
              <CarouselContent className="w-full relative ">
                <CarouselItem className="desktop:basis-1/3 laptop:basis-1/1 tablet:basis-1/1 mobile:basis-1/1 basis-1/1 ">
                  <NewsCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/3 laptop:basis-1/1 tablet:basis-1/1 mobile:basis-1/1 basis-1/1 ">
                  <NewsCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/3 laptop:basis-1/1 tablet:basis-1/1 mobile:basis-1/1 basis-1/1 ">
                  <NewsCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/3 laptop:basis-1/1 tablet:basis-1/1 mobile:basis-1/1 basis-1/1 ">
                  <NewsCard />
                </CarouselItem>
                <CarouselItem className="desktop:basis-1/3 laptop:basis-1/1 tablet:basis-1/1 mobile:basis-1/1 basis-1/1 ">
                  <NewsCard />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
