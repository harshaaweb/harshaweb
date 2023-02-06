import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../assets/images/bg1.webp";
import bg2 from "../assets/images/bg2.webp";
// Import Swiper styles
function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={bg1} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bg2} alt="" srcset="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
