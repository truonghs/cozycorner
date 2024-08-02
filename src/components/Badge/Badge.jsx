import React from "react";

function Badge({ value, className }) {
  return <div className={`z-50 h-[26px] w-14  px-2.5 py-0.5 mobile:scale-100 scale-75 rounded-bl-lg rounded-tr-lg text-white font-semibold leading-5 ${className}`}>{value}</div>;
}

export default Badge;
