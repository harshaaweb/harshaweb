import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function ImageSection() {
  return (
    <>
      <Swiper
        pagination={true}
        slidesPerView={3}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[300px]">
            <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
              " Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum.Mirum est notare quam littera gothica, quam
              nunc putamus parum claram. "
            </div>
            <div className="py-2 font-bold text-black text-[20px]">
              Bushra Ahsani
            </div>
            <div className="text-[14px]">CEO, Home Limited</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px]">
            <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
              " Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum.Mirum est notare quam littera gothica, quam
              nunc putamus parum claram. "
            </div>
            <div className="py-2 font-bold text-black text-[20px]">
              Bushra Ahsani
            </div>
            <div className="text-[14px]">CEO, Home Limited</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px]">
            <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
              " Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum.Mirum est notare quam littera gothica, quam
              nunc putamus parum claram. "
            </div>
            <div className="py-2 font-bold text-black text-[20px]">
              Bushra Ahsani
            </div>
            <div className="text-[14px]">CEO, Home Limited</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px]">
            <div className=" text-[18px] py-2 italic text-[#A7A7A7] ">
              " Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum.Mirum est notare quam littera gothica, quam
              nunc putamus parum claram. "
            </div>
            <div className="py-2 font-bold text-black text-[20px]">
              Bushra Ahsani
            </div>
            <div className="text-[14px]">CEO, Home Limited</div>
          </div>
        </SwiperSlide>
         
      </Swiper>
      <div className="mainnavdiv">
      {/* <div className="flex border-b-[0.5px] border-[#CFB1Af] justify-around items-center ">
        <div className="flex  items-center p-2 ">
          <div className="flex p-2  items-center">
            <div>
              <AiOutlineMail color="#f4ba49" />
            </div>
            <div className="ml-2 text-white">Harshaweb@info.com</div>
          </div>
          <div className="flex p-2  items-center">
            <div>
              <IoMdCall color="#f4ba49" />
            </div>
            <div className="ml-2 text-white">919369390970</div>
          </div>
        </div>
        <div className="flex  items-center p-2">
          <div className="w-[40px] cursor-pointer">
            <FaFacebookF color="white" />
          </div>
          <div className="w-[40px] cursor-pointer">
            <BsTwitter color="white" />
          </div>
          <div className="w-[40px] cursor-pointer">
            <AiFillInstagram size={23} color="white" />
          </div>
          <div className="w-[40px] cursor-pointer">
            <FaDribbble color="white" />
          </div>
          <div className="flex items-center justify-evenly">
            <div>
              <button className="btn btn-ghost text-white">REGISTER</button>
            </div>
            <div className="font-bold text-white ml-2 mr-2">|</div>
            <div>
              <button className="btn btn-ghost text-white">LOGIN</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
         
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div class="group inline-block relative">
                <button class=" text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Dropdown</span>
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul class="absolute hidden w-full text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Two
                    </a>
                  </li>
                </ul>
              </div>
              <div class="group inline-block relative">
                <button class=" text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Dropdown</span>
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul class="absolute hidden w-full text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Two
                    </a>
                  </li>
                </ul>
              </div>
              <div class="group inline-block relative">
                <button class=" text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Dropdown</span>
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul class="absolute hidden w-full text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Two
                    </a>
                  </li>
                </ul>
              </div>
              <div class="group inline-block relative">
                <button class=" text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Dropdown</span>
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul class="absolute hidden w-full text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Two
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div> */}
      {/* <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-black">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div> */}
    </div>
    </>
  );
}
