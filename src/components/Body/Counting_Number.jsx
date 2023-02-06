import React from "react";
import bg4 from "../assets/images/bg4.webp";
import CountUp from "react-countup";
function Counting_Number() {
  return (
    <div className="mt-12">
      <div
        className=""
        style={{
          backgroundImage: `url(${bg4})`,
          height: "auto",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full md:p-16 bg-[#000000e5]">
          <div className="max-w-[90%]  md:p-20 p-6 md:py-0 py-12 m-auto">
            <div className="md:flex justify-between items-center">
              <div className="md:text-[38px] text-[25px] text-white  font-bold md:w-[350px]">
                <span className="text-[#F9BF3A]"> BEST</span> FACTS OF OUR
                COMPANY
              </div>
              <div className="md:border-l-2 md:border-dotted md:mt-0 mt-8 md:w-[50%] w-full m-auto  ">
                <div className="md:pl-8 text-white  md:text-[14px] text-[18px]">
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer.
                </div>
              </div>
            </div>
            <div className="mt-16 md:flex flex-wrap items-center sm:justify-between  w-full">
              <div className="w-[200px]  ">
                <div className="font-bold md:text-[50px] text-[25px] md:mt-0 mt-6 text-white">
                  <CountUp end={60} duration={8} />
                </div>
                <div className="font-semibold md:text-[20px] text-[17px] text-white">
                  Satisified Clients
                </div>
              </div>
              <div className="w-[200px] ">
                <div className="font-bold md:text-[50px] text-[25px] md:mt-0 mt-6 text-white">
                  <CountUp end={60} duration={8} />
                </div>
                <div className="font-semibold md:text-[20px] text-[17px] text-white">
                  Completed Projects
                </div>
              </div>
              <div className="w-[200px] ">
                <div className="font-bold md:text-[50px] text-[25px] md:mt-0 mt-6 text-white">
                  <CountUp end={99} duration={8} />%
                </div>
                <div className="font-semibold md:text-[20px] text-[17px] text-white">
                  Satisfaction rate
                </div>
              </div>
              <div className="w-[200px] ">
                <div className="font-bold md:text-[50px] text-[25px] md:mt-0 mt-6 text-white">
                  <CountUp end={58} duration={8} />
                </div>
                <div className="font-semibold md:text-[20px] text-[17px] text-white">
                  Satisified Clients
                </div>
              </div>
              <div className="w-[200px] ">
                <div className="font-bold md:text-[50px] text-[25px] md:mt-0 mt-6 text-white">
                  <CountUp end={87} duration={8} />+
                </div>
                <div className="font-semibold md:text-[20px] text-[17px] text-white">
                 New Users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counting_Number;
