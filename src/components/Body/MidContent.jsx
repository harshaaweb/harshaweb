import React from "react";
import { GiCheckMark } from "react-icons/gi";
import bg3 from "../assets/images/codee.png";
import code from "../assets/images/code.png";
function MidContent() {
  return (
    <>
      <div className="  md:w-[85%] w-full   justify-center md:mt-24 m-auto p-4">
        <div className="md:w-[70%] mt-8 w-full m-auto">
          <div className="md:w-[70%]  w-full md:text-center m-auto font-bold md:text-[35px] text-[20px] text-black">
            Host your website on our Panel and get the best performance
          </div>
          <div className="md:mt-8 mt-4 font-semibold md:text-[20px] text-[16px] text-[#999] text-center">
            We are giving you the best hosting service without any cost .
            Moreover, you will get the 24/7 support from our team.
          </div>
        </div>
        <div className="md:flex flex-wrap items-center justify-between md:mt-24 mt-8  m-auto  md:w-[85%] w-[full]   ">
          <div className="md:w-[48%]  w-full m-auto">
            <div className="font-bold  md:text-[35px] text-[20px]">
              Host any types of website on our panel
            </div>
            <div className="font-semibold text-[17px] md:mt-6 mt-4 text-[#999]">
              In this , you have access to upload your backend and front end
              code to achieve your dreams with your own website.
            </div>
            <div className="md:mt-8 mt-4">
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">
                  Node js & Express Js
                </div>
              </div>
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">
                  PHP & Laravel
                </div>
              </div>
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">
                  Python & Django
                </div>
              </div>
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">
                  MongoDb & Mysql
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-8 m-auto">
            <img src={code} alt="" />
          </div>
        </div>
      </div>
      <div className="md:flex md:w-[85%] w-[90%] m-auto justify-center mt-16  p-4">
        <div className="md:w-[40%] w-full    m-auto text-justify  ">
          <div className="p-4 md:text-[17px] text-[20px] pb-8 text-[#666]">
            We have more than{" "}
            <span className="font-bold text-black">
              {" "}
              6 years of experiences{" "}
            </span>
            in Making Products
          </div>
          <div className="pb-4 pt-4 ">
            <img src={bg3} alt="" srcset="" />
          </div>
        </div>
        <div className="border-dashed border-[1px] border-[#BBBBBB]  "></div>
        <div className="md:w-[40%] w-full m-auto text-justify md:p-6 p-2 md:mt-0  mt-4 leading-8  text-[#999]">
          We have delivered numerous projects to our clients and best thing is
          they all are satisfied with our services . Apart from the hosting , we
          also give the best security in your projects . Our biggest achievement
          is our clients from all around the world 🌍 . Just like <b>Dubai</b>,
          &nbsp;
          <b>America</b> , <b>Britain</b> , <b>Germany </b> , <b>Canada</b> and
          many more.
        </div>
      </div>
    </>
  );
}

export default MidContent;
