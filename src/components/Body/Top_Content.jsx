import React from "react";
import bgproblem from "../assets/images/bgproblem.svg";
import CountUp from "react-countup";
import { motion } from "framer-motion";
function Top_Content() {
  return (
    <div className="bg-[#111827]  md:p-12 p-8">
      <div className="md:w-[85%] w-[100%] m-auto justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 2 }}
          className="md:mt-24 mt-24 text-[white] font-bold text-center  md:text-[30px] text-[20px] "
        >
          <div className="flex flex-col sm:flex-row items-center justify-center sm:h-[40px] h-[80px]  leading-[40px]">
            <div className="h-[40px] leading-[40px] mr-[1px]">Focusing on</div>
            <div className="overflow-hidden min-h-[40px] max-h-[40px] flex items-center leading-[40px]">
              <div className="relative top-[40px] animate-text h-[120px]">
                <div className="text-[#d63ff1c8]">Interactive Website 💻</div>
                <div className="text-[#efa423] ml-2">High Security / SMTP 🔐</div>
                <div className="text-[#3A7FF1]">Creative Application 📱</div>
              </div>
            </div>
            {/* <div className="overflow-hidden min-h-[40px] sm:hidden">
              1
            </div> */}
          </div>
        </motion.div>
        <div className="w-full md:mt-2 mt-4 text-left items-center">
          <img src={bgproblem} alt="" className="w-full m-auto " />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 4 }}
        >
          <div className="mt-16 md:bg-[#1F2937] p-4 rounded-md shadow-md md:flex flex-wrap items-center sm:justify-between  w-full">
            <div className="w-[200px] md:text-center text-left md:m-0 m-auto md:pt-0 pt-4 ">
              <div className="font-bold md:text-[50px] text-[22px] text-white">
                <CountUp end={60} duration={8} />
              </div>
              <div className="font-semibold md:text-[20px] text-[16px] text-white">
                Satisified Clients
              </div>
            </div>
            <div className="w-[200px] md:text-center text-left md:m-0 m-auto md:pt-0 pt-4">
              <div className="font-bold md:text-[50px] text-[22px] text-white">
                <CountUp end={60} duration={8} />
              </div>
              <div className="font-semibold md:text-[20px] text-[16px] text-white">
                Completed Projects
              </div>
            </div>
            <div className="w-[200px] md:text-center text-left md:m-0 m-auto md:pt-0 pt-4">
              <div className="font-bold md:text-[50px] text-[22px] text-white">
                <CountUp end={99} duration={8} />%
              </div>
              <div className="font-semibold md:text-[20px] text-[16px] text-white">
                Satisfaction rate
              </div>
            </div>
            <div className="w-[200px] md:text-center text-left md:m-0 m-auto md:pt-0 pt-4">
              <div className="font-bold md:text-[50px] text-[22px] text-white">
                <CountUp end={58} duration={8} />
              </div>
              <div className="font-semibold md:text-[20px] text-[16px] text-white">
                Satisified Clients
              </div>
            </div>
            <div className="w-[200px] md:text-center text-left md:m-0 m-auto md:pt-0 pt-4">
              <div className="font-bold md:text-[50px] text-[22px] text-white">
                <CountUp end={87} duration={8} />+
              </div>
              <div className="font-semibold md:text-[20px] text-[16px] text-white">
                New Users
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Top_Content;
