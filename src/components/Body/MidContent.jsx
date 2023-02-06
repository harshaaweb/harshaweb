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
            Use sensitive data without sacrificing privacy
          </div>
          <div className="md:mt-8 mt-4 font-semibold md:text-[20px] text-[16px] text-[#999] text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est.
          </div>
        </div> 
        <div className="md:flex flex-wrap items-center justify-between md:mt-24 mt-8  m-auto  md:w-[85%] w-[90%]   ">
          <div className="md:w-[48%]  w-full m-auto">
            <div className="font-bold  md:text-[35px] text-[20px]">
              Standardized dev environments
            </div>
            <div className="font-semibold text-[17px] md:mt-6 mt-4 text-[#999]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              optio quia fugiat dicta similique nostrum exercitationem iusto
              veniam veritatis eius aliquam numquam, cupiditate vero. Ea placeat
              molestias repudiandae eaque ducimus!
            </div>
            <div className="md:mt-8 mt-4">
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">Performance reviews</div>
              </div>
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">Performance reviews</div>
              </div>
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">Performance reviews</div>
              </div>
              <div className="flex items-center md:mt-8 mt-4 font-bold md:text-[20px] text-[17px]">
                <div className="m-2">
                  <GiCheckMark />
                </div>
                <div className="m-2 md:text-black text-[#1b1b1b]">Performance reviews</div>
              </div>
            </div>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-8 m-auto">
            <img src={code} alt="" />
          </div>
        </div>
      </div>
      <div className="md:flex md:w-[85%] w-[90%] m-auto justify-center mt-24  p-4">
        <div className="md:w-[40%] w-full    m-auto text-justify  ">
          <div className="p-4 text-[15px] pb-8 text-[#666]">
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
          <div className="p-4 text-[15px] pb-8 text-[#999]">
            “Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            esse molestie consequat.”
          </div>
        </div>
        <div className="border-dashed border-[1px] border-[#BBBBBB]  "></div>
        <div className="md:w-[40%] w-full m-auto text-justify md:p-6 p-2 md:mt-0  mt-4 leading-8  text-[#999]">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi
          Mirum est notare quam littera gothica, quam nunc putamus parum claram,
          antepos uerit litterarum formas humanitatis per seacula quarta.
        </div>
      </div>
    </>
  );
}

export default MidContent;
