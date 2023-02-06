import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../assets/css/cardSlider.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import planning from "../assets/images/planning.gif";
import vectorgif from "../assets/images/vectorgif.gif";
import vector3 from "../assets/images/coding2.webp";
// import required modules
import { EffectCards } from "swiper";
import bg5 from "../assets/images/bg5.jpg";
import reactjs from "../assets/images/reactjss.jfif";
import reactanimation from "../assets/images/reactj.gif";
import "../assets/css/ourproject.css";
function OurProjects() {
  return (
    <div className="mt-16 ">
      <div className="w-full m-auto ">
        <div className="text-center text-black font-bold md:text-[35px] text-[25px]">
          What We Do
        </div>
        <div className="p-6 lg:p-24 flex flex-wrap  items-center  justify-evenly">
          <div className="w-[350px]  md:m-4 m-auto md:pt-0 pt-12">
            <div className="w-[350px] h-[262px]">
              <img src={planning} alt="" srcset="" className="w-full h-full" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">
              Structure Planning
            </div>
            <div className="leading-6 text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit
              esse molestie consequat.
            </div>
          </div>
          <div className="w-[350px] md:m-4 m-auto md:pt-0 pt-12">
            <div className="w-[350px] h-[262px]">
              <img src={vectorgif} alt="" srcset="" className="w-full h-full" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">
              Implementing UI
            </div>
            <div className="leading-6 text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit
              esse molestie consequat.
            </div>
          </div>
          <div className="w-[350px] md:m-4 m-auto md:pt-0 pt-12">
            <div className="w-[350px] h-[262px]">
              <img src={vector3} alt="" srcset="" className="w-full h-full " />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">Quality Work</div>
            <div className="leading-6 text-justify">
              Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit
              esse molestie consequat.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA]">
        <div className="text-center text-black font-bold md:text-[35px] text-[25px] md:py-6 py-8 md:pb-0  ">
          Testimonials
        </div>
        <div className="md:px-24 px-6 md:py-12 py-6 ">
          <div className="ourpoject">
            <div className="leftdiv    m-auto">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={reactjs} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={reactanimation} alt="" srcset="" />
                </SwiperSlide>
                {/* <SwiperSlide>
                  <img src={bg5} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={bg5} alt="" srcset="" />
                </SwiperSlide> */}
              </Swiper>
            </div>
            <div className="rightdiv   m-auto text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              mollitia dignissimos ut eum similique error voluptatum autem enim
              voluptate eos doloremque, accusantium nostrum cumque doloribus
              quam laboriosam quasi minus laudantium! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Tempore voluptas aperiam
              praesentium quis impedit illo fugiat. Veniam quibusdam ipsam
              porro? Culpa illo nesciunt cumque rem vel consectetur dicta dolore
              quo? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat repudiandae rem iste tenetur dolores voluptatibus illum
              libero quod, cum perferendis incidunt odit porro molestias
              provident neque quam velit eaque recusandae.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
