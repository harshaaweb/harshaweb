import React from "react";
import bg5 from "../assets/images/web4.webp";
import bg7 from "../assets/images/web5.webp";
import bg6 from "../assets/images/web6.webp";

function LatestNews() {
  return (
    <div className="bg-[#f8f8f8]  ">
      <div className="mt-16  md:w-[90%] w-[95%]  m-auto">
        <div className="text-center md:pt-8 pt-2 text-black font-bold text-[35px]">
          Our Products
        </div>
        <div className="xl:p-24 p-4 md:flex flex-wrap items-center justify-between">
          <div className="md:w-[350px] w-auto md:m-4 m-auto md:pt-0 pt-8">
            <div className="w-full">
              <img src={bg5} alt="" srcset="" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">Dauqu Panel</div>
            <div className="leading-6 text-justify">
              Dauqu Panel is a web panel that allows you to manage your website
              easily and quickly. It allows to host your website on the cloud
              easily. Click
              <a href="https://dauqu-cp.vercel.app/">
                <span className="font-bold underline italic"> here </span>
              </a>
              to visit Dauqu Panel.
            </div>
          </div>
          <div className="md:w-[350px] w-auto md:m-4 m-auto md:pt-0 pt-8">
            <div className="w-full">
              <img src={bg6} alt="" srcset="" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">Dauqu Website</div>
            <div className="leading-6 text-justify">
              From Dauqu website you can easily purchase our products and
              services and also you can get more information about our products
              and services. Click
              <a href="https://cp-dauqu-frontend.vercel.app/">
                <span className="font-bold underline italic"> here </span>
              </a>
              to visit Dauqu Website.
            </div>
          </div>
          <div className="md:w-[350px] w-auto md:m-4 m-auto md:pt-0 pt-8">
            <div className="w-full">
              <img src={bg7} alt="" srcset="" />
            </div>
            <div className="mt-4 mb-4 font-bold text-[22px]">Best Security</div>
            <div className="leading-6 text-justify">
              We provide the best security for your website. Alogn this we also provide the budget plan  for your website .
              It is very easy to use and manage your website. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
