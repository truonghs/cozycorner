import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex bg-brown justify-center items-center text-off-white py-16 max-w-screen">
      <div className="desktop:w-desktop max-w-full flex mobile:flex-row flex-col px-10 gap-4 flex-wrap justify-between">
        <div className="flex-1 gap-4 flex flex-col">
          <div>
            <img className="h-40" src="./logo.png" alt="logo" />
            <div className="text-off-white">Hãy đến với Cozy Corner và hãy để những món ăn tuyệt vời của chúng tôi làm cho cuộc sống bạn thêm ấm áp.</div>
          </div>

          <div className="font-bold text-xl">HỖ TRỢ THANH TOÁN</div>
          <div className="flex gap-4">
            <img className="w-[50px] h-[30px]" src={require("@/images/cash.webp")} alt="payment-1" />
            <img className="w-[50px] h-[30px]" src={require("@/images/banking.webp")} alt="payment-2" />
            <img className="w-[50px] h-[30px]" src={require("@/images/credit.webp")} alt="payment-3" />
          </div>
        </div>
        <div className="flex desktop:flex-[3] mobile:flex-[2] flex-1 gap-4  desktop:flex-nowrap flex-wrap justify-end">
          <div className="flex flex-col items-start gap-4 flex-1 min-w-[200px]">
            <div className="text-xl font-bold text-yellow">CHÍNH SÁCH</div>
            <Link className="hover:text-yellow">Chính sách thành viên</Link>
            <Link className="hover:text-yellow">Chính sách thanh toán</Link>
            <Link className="hover:text-yellow">Hướng dẫn mua hàng</Link>
            <Link className="hover:text-yellow">Quà tặng tri ân</Link>
            <Link className="hover:text-yellow">Bảo mật thông tin cá nhân</Link>
          </div>
          <div className="flex flex-col gap-4 flex-1 min-w-[200px]">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold text-yellow">THÔNG TIN CHUNG</div>
              <div>
                <span className="font-bold text-yellow">Địa chỉ: </span>70 Lữ Gia, Phường 15, Quận 11, TP.HCM
              </div>
              <div>
                <span className="font-bold text-yellow">Điện thoại: </span>1900 6750
              </div>
              <div>
                <span className="font-bold text-yellow">Email: </span>support@cozycorner.vn
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold text-yellow">LIÊN KẾT SÀN</div>
              <div className="flex gap-4">
                <img className="w-[50px] h-[50px]" src={require("@/images/shopee.png")} alt="shopee" />
                <img className="w-[50px] h-[50px]" src={require("@/images/lazada.png")} alt="lazada" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 min-w-[200px]">
            <div>
              <div className="text-xl font-bold text-yellow">HỖ TRỢ</div>
              <div className="font-bold">MUA ONLINE (08:00 - 21:00 mỗi ngày)</div>
            </div>
            <div>
              <div className="text-xl font-bold text-yellow">19001900</div>
              <div className="italic ">Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</div>
              <div className="font-bold">GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold text-yellow">MẠNG XÃ HỘI</div>
              <div className="flex gap-4">
                <img className="w-[50px] h-[50px]" src={require("@/images/facebook.png")} alt="facebook" />
                <img className="w-[50px] h-[50px]" src={require("@/images/youtube.png")} alt="youtube" />
                <img className="w-[50px] h-[50px]" src={require("@/images/ins.png")} alt="ins" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
