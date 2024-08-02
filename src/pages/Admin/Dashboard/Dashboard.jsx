import React from "react";
import { CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import OrdersChart from "../Charts/OrdersChart/OrdersChart";
import EarningsChart from "../Charts/EarningsChart/EarningsChart";
import { BsCurrencyDollar } from "react-icons/bs";
const chartData = [
  { day: "01/06", orders: 186, bookings: 80 },
  { day: "08/06", orders: 305, bookings: 200 },
  { day: "15/06", orders: 237, bookings: 120 },
  { day: "22/06", orders: 73, bookings: 190 },
  { day: "29/06", orders: 209, bookings: 130 },
  { day: "06/07", orders: 214, bookings: 140 },
];

const colChartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

function Dashboard() {
  return (
    <div className="bg-bg-admin p-10 pb-0 h-full">
      <div className="flex gap-4">
        <div className="flex flex-[1.5] flex-col gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-white shadow rounded-lg p-4 flex hover:shadow-lg hover:cursor-pointer duration-200">
              <div className="flex-[5] gap-4 flex flex-col">
                <div className="font-bold text-xl text-gray">Orders</div>
                <div className="font-semi text-3xl">2.000</div>
                <div className="flex items-center">
                  <FaAngleDoubleUp className="text-green" />
                  <div className="text-green font-bold">3.02%</div>
                  <div className="font-bold text-gray/70 ml-2">Since last week</div>
                </div>
              </div>
              <div className="flex-1flex items-start justify-center">
                <IoCartOutline className="text-5xl text-orange rounded-full p-2 bg-orange/20" />
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 flex hover:shadow-lg hover:cursor-pointer duration-200">
              <div className="flex-[5] gap-4 flex flex-col">
                <div className="font-bold text-xl text-gray">Booking</div>
                <div className="font-semi text-3xl">2.000</div>
                <div className="flex items-center">
                  <FaAngleDoubleUp className="text-green" />
                  <div className="text-green font-bold">3.02%</div>
                  <div className="font-bold text-gray/70 ml-2">Since last week</div>
                </div>
              </div>
              <div className="flex-1flex items-start justify-center">
                <CiCreditCard1 className="text-5xl text-orange rounded-full p-2 bg-orange/20" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-4 flex-1">
              <div className="bg-white shadow rounded-lg p-4 flex hover:shadow-lg hover:cursor-pointer duration-200">
                <div className="flex-[5] gap-4 flex flex-col">
                  <div className="font-bold text-xl text-gray">Sales</div>
                  <div className="font-semi text-3xl">2.000</div>
                  <div className="flex items-center">
                    <FaAngleDoubleUp className="text-green" />
                    <div className="text-green font-bold">3.02%</div>
                    <div className="font-bold text-gray/70 ml-2">Since last week</div>
                  </div>
                </div>
                <div className="flex-1flex items-start justify-center">
                  <CiDeliveryTruck className="text-5xl text-orange rounded-full p-2 bg-orange/20" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 flex hover:shadow-lg hover:cursor-pointer duration-200">
            <div className="flex-[5] gap-4 flex flex-col">
              <div className="font-bold text-xl text-gray">Earning</div>
              <div className="font-semi text-3xl">2.000</div>
              <div className="flex items-center">
                <FaAngleDoubleUp className="text-green" />
                <div className="text-green font-bold">3.02%</div>
                <div className="font-bold text-gray/70 ml-2">Since last week</div>
              </div>
            </div>
            <div className="flex-1flex items-start justify-center">
              <BsCurrencyDollar className="text-5xl text-orange rounded-full p-2 bg-orange/20" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 gap-4 flex flex-[6] flex-col ">
          <EarningsChart chartData={colChartData} />
          <OrdersChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
