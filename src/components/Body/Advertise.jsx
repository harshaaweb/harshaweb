import React from "react";
import { Link } from "react-router-dom";

function Advertise() {
  return (
    <div className="mt-8 mb-8 p-12 bg-[#F9BF3A]">
      <div className="md:w-[80%] w-full md:flex items-center justify-between m-auto">
        <div>
          <div className="font-bold text-[30px] text-white">
            Wanted to build something?
          </div>
          <div className="text-white text-[18px]">
            We are always ready to welcome you
          </div>
        </div>
        <div className="md:mt-0 mt-6">
          <Link to="/website_price_cal">
            <button className="btn p-2 bg-black text-white w-[150px] ">
              Calculate Price
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Advertise;
