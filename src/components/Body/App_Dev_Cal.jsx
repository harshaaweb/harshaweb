import React, { useEffect, useState } from "react";

import contact_banner from "../assets/images/contact_banner.png";
import react_native from "../assets/images/react_native.jfif";
import flutter from "../assets/images/flutter.png";
import android_studio from "../assets/images/android_studio.jfif";
import xcode from "../assets/images/xcode.jfif";
import dart from "../assets/images/dart.png";
import js from "../assets/images/js.png";
import kotlin from "../assets/images/kotlin.png";
import Java from "../assets/images/Java.png";
import objective_c from "../assets/images/objective-c.png";
import swift from "../assets/images/swift.jfif";
import ecommerce from "../assets/images/ecommerce.png";
import news from "../assets/images/news.png";
import blogging from "../assets/images/blogging.png";
import custom from "../assets/images/custom.png";
import axios from "axios";
import { API } from "../Constant/Constant";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import Please_Login_Page from "./Please_Login_Page";

function App_Dev_Cal() {
  const [checklogin, setChecklogin] = useState("");
  const getuser = () => {
    axios
      .get(`${API}/user_login/check_valid_token`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setChecklogin(res.data);
        // setIsloggedin(true);
      })
      .catch((err) => {
        console.log(err);
        // setIsloggedin(false);
      });
  };

  useEffect(() => {
    getuser();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const [appTech, setAppTech] = useState("");
  const [appType, setAppType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pn, setPN] = useState("");
  const [message, setMessage] = useState("");
  const [totalEstimate, setTotalEstimate] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [file, setFile] = useState("");

  const uuid = require("uuid");
  const req_id = uuid.v4();

  const [data, setData] = useState();

  useEffect(() => {
    setData(totalEstimate);
  }, [totalEstimate]);

  // setReq_id(Math.floor(Math.random().toString(36).substring(2, 15)));

  // console.log(req_id);

  const navigate = useNavigate();

  const formdata = new FormData();
  formdata.append("req_id", req_id);
  formdata.append("file", file);
  formdata.append("appTech", appTech);
  formdata.append("appType", appType);
  formdata.append("name", name);
  formdata.append("email", email);
  formdata.append("phoneNumber", pn);
  formdata.append("message", message);
  formdata.append("totalEstimate", totalEstimate);
  formdata.append("numberOfPages", numberOfPages);
  formdata.append("paymentid", "paymentid");
  formdata.append("payment_gateway", "payment_gateway");
  formdata.append("payment_status", "payment_status");

  const appRequest = () => {
    axios.post(`${API}/app_request`, formdata).then(() => {
      console.log("success");
      console.log(data);
      navigate("/payment", { state: { data: data } });
      localStorage.setItem("amount", totalEstimate);
      localStorage.setItem("projectType", "Application");
      localStorage.setItem("req_id", req_id);
    });
  };

  const availablesoon=()=>{
    alert("This option will be available soon..")
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {checklogin === true ? (
        <div>
          <div
            className="flex_jc_ic h-[400px] relative top-[75px] bg-cover bg-fixed z-[-1]"
            style={{ backgroundImage: `url(${contact_banner})` }}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.9, stiffness: 500 }}
              className="text-center p-16 text-white"
            >
              <div>
                <h1 className="font-bold md:text-[50px] text-[22px] leading-[60px]">
                  Application Development
                </h1>
                <div className="flex_ic font-bold text-[15px] leading-[26px]">
                  <div className="text-[white] md:text-[18px] text-[15px]  md:mt-12 mt-4 cursor-pointer">
                    <a href="/">
                      &nbsp;Choose your desireable technologies and calculate
                      the estimated budget of your application.
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full bg-white py-[80px] flex justify-center">
            <div className="max-w-[1250px] m-auto">
              <div className="flex items-center flex-wrap justify-evenly">
                <div className="div">
                  <div className="p-6 max-w-[400px]">
                    <h3 className="mb-5 text-lg font-semibold text-gray-700 text-center">
                      Choose Application Development Technology:
                    </h3>
                    <ul className="w-full  h-[80vh] overflow-y-scroll my-10">
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("React Native");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[0].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[0].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 100;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 0) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="React_Native_option"
                          defaultValue="React Native"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="React_Native_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={react_native}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                React_Native
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              React Native lets you create truly native apps and
                              doesn't compromise your users' experiences.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("Flutter");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[1].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[1].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 100;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 1) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Flutter_option"
                          defaultValue="Flutter"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="Flutter_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={flutter}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Flutter
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Flutter is an open source framework by Google for
                              building beautiful, natively compiled,
                              multi-platform applications from a single
                              codebase. · Fast · Productive.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("Android Studio");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[2].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[2].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 150;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 2) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Android_Studio_option"
                          defaultValue="Android_Studio"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="Android_Studio_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={android_studio}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Android_Studio
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Android Studio provides app builders with an
                              integrated development environment (IDE) optimized
                              for Android apps.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("XCode");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[3].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[3].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 500;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 3) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="XCode_option"
                          defaultValue="XCode"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="XCode_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={xcode}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                XCode
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Xcode is Apple's integrated development
                              environment (IDE) for macOS, used to develop
                              software for macOS, iOS, iPadOS, watchOS, and
                              tvOS.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("Dart");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[4].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[4].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 800;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 4) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Dart_option"
                          defaultValue="Dart"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="Dart_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={dart}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Dart
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Dart is a programming language designed for client
                              development, such as for the web and mobile apps.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("Javascript");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[5].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[5].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 100;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 5) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Javascript_option"
                          defaultValue="Javascript"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="Javascript_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={js}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Javascript
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              JavaScript is the world's most popular programming
                              language. JavaScript is the programming language
                              of the Web.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("Kotlin");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[6].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[6].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 100;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 6) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Kotlin_option"
                          defaultValue="Kotlin"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="Kotlin_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={kotlin}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Kotlin
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Write better Android apps faster with Kotlin.
                              Kotlin is a modern statically typed programming
                              language used by over 60% of professional Android
                              developers
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("Java");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[7].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[7].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 100;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 7) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Java_option"
                          defaultValue="Java"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="Java_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={Java}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Java
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Learn Java. Java is a popular programming
                              language. Java is used to develop mobile apps, web
                              apps, desktop apps, games and much more.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("ObjectiveC");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[8].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[8].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 100;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 8) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="ObjectiveC_option"
                          defaultValue="ObjectiveC"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="ObjectiveC_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={objective_c}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                ObjectiveC
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Objective-C is a general-purpose, object-oriented
                              programming language that adds Smalltalk-style
                              messaging to the C programming language.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 app_techs rounded-md"
                        onClick={function () {
                          setAppTech("Swift");

                          var app_techs =
                            document.getElementsByClassName("app_techs");
                          document.getElementsByClassName(
                            "app_tech_label"
                          )[9].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_tech_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_tech"
                            )[9].value;
                          document.getElementsByClassName(
                            "app_tech_price"
                          )[0].value = 100;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_techs.length; i++) {
                            if (i !== 9) {
                              document.getElementsByClassName("app_tech_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Swift_option"
                          defaultValue="Swift"
                          className="hidden peer app_tech"
                          required=""
                        />
                        <label
                          htmlFor="Swift_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_tech_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={swift}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Swift
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              Swift is a powerful and intuitive programming
                              language for iOS, iPadOS, macOS, tvOS, and
                              watchOS. Writing Swift code is interactive and
                              fun, the syntax is ...
                            </div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="div">
                  <div className="p-6 max-w-[400px]">
                    <h3 className="mb-5 text-lg font-semibold text-gray-700 h-[51px] text-center">
                      Choose Application type:
                    </h3>
                    <ul className="w-full  h-[80vh] overflow-y-scroll my-10">
                      <li
                        className="my-2 rounded-md app_types"
                        onClick={function () {
                          setAppType("Ecommerce");

                          var app_types =
                            document.getElementsByClassName("app_types");
                          document.getElementsByClassName(
                            "app_type_label"
                          )[0].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_type_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_type"
                            )[0].value;
                          document.getElementsByClassName(
                            "app_type_price"
                          )[0].value = 1;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_types.length; i++) {
                            if (i !== 0) {
                              document.getElementsByClassName("app_type_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="React_Native_option"
                          defaultValue="Ecommerce"
                          className="hidden peer app_type"
                          required=""
                        />
                        <label
                          htmlFor="React_Native_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600   peer-checked:text-gray-600 hover:bg-gray-50 app_type_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={ecommerce}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Ecommerce
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              A JavaScript library for building user interfaces.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 rounded-md app_types"
                        onClick={function () {
                          setAppType("News");

                          var app_types =
                            document.getElementsByClassName("app_types");
                          document.getElementsByClassName(
                            "app_type_label"
                          )[1].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_type_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_type"
                            )[1].value;
                          document.getElementsByClassName(
                            "app_type_price"
                          )[0].value = 1.2;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_types.length; i++) {
                            if (i !== 1) {
                              document.getElementsByClassName("app_type_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Flutter_option"
                          defaultValue="News"
                          className="hidden peer app_type"
                          required=""
                        />
                        <label
                          htmlFor="Flutter_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer  hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_type_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={news}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                News
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              A JavaScript library for building user interfaces.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 rounded-md app_types"
                        onClick={function () {
                          setAppType("Blogging");

                          var app_types =
                            document.getElementsByClassName("app_types");
                          document.getElementsByClassName(
                            "app_type_label"
                          )[2].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_type_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_type"
                            )[2].value;
                          document.getElementsByClassName(
                            "app_type_price"
                          )[0].value = 1.3;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_types.length; i++) {
                            if (i !== 2) {
                              document.getElementsByClassName("app_type_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="Android_Studio_option"
                          defaultValue="Blogging"
                          className="hidden peer app_type"
                          required=""
                        />
                        <label
                          htmlFor="Android_Studio_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_type_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={blogging}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Blogging
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              A JavaScript library for building user interfaces.
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        className="my-2 rounded-md app_types"
                        onClick={function () {
                          setAppType("Custom");

                          var app_types =
                            document.getElementsByClassName("app_types");
                          document.getElementsByClassName(
                            "app_type_label"
                          )[3].style.border = "2px solid #d33847";
                          document.getElementsByClassName(
                            "app_type_chosen"
                          )[0].value =
                            document.getElementsByClassName(
                              "app_type"
                            )[3].value;
                          document.getElementsByClassName(
                            "app_type_price"
                          )[0].value = 1.4;
                          // var database_price;
                          // total_amount();
                          for (let i = 0; i < app_types.length; i++) {
                            if (i !== 3) {
                              document.getElementsByClassName("app_type_label")[
                                i
                              ].style.border = "2px solid #e5e7eb";
                            }
                          }
                        }}
                      >
                        <input
                          type="radio"
                          id="XCode_option"
                          defaultValue="Custom"
                          className="hidden peer app_type"
                          required=""
                        />
                        <label
                          htmlFor="XCode_option"
                          className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_type_label"
                        >
                          <div className="block">
                            <div className="h-[40px]">
                              <img
                                src={custom}
                                alt="some desc"
                                className="h-full"
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="w-full text-lg font-semibold">
                                Custom
                              </div>
                              {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                            </div>
                            <div className="w-full text-sm">
                              A JavaScript library for building user interfaces.
                            </div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-end flex-wrap justify-evenly max-w-[850px] m-auto">
                  <div className="p-6 md:w-[400px] w-full">
                    <label
                      htmlFor=""
                      className="text-[#272727] text-[17px] font-semibold"
                    >
                      Application Technology Chosen
                    </label>
                    <input
                      type="text"
                      className="w-full outline-none border border-[#d33847] h-[40px] app_tech_chosen text-[#272727] px-3 rounded-sm"
                      min={1}
                      readOnly
                      onChange={(event) => {
                        setAppTech(event.target.value);
                      }}
                    />
                    <input type="hidden" className="app_tech_price" />
                  </div>
                  <div className="p-6 md:w-[400px] w-full">
                    <div className="w-full md:flex justify-center items-stretch flex-wrap">
                      <div className="w-full flex justify-center items-stretch flex-wrap">
                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-[#272727] text-[17px] font-semibold"
                          >
                            Application Type Chosen
                          </label>
                          <div className="">
                            <input
                              type="text"
                              className="w-full outline-none border border-[#d33847] h-[40px] app_type_chosen text-[#272727] px-3 rounded-sm"
                              defaultValue=""
                              readOnly
                              onChange={(event) => {
                                setAppType(event.target.value);
                              }}
                            />
                            <input type="hidden" className="app_type_price" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:w-[400px] w-full">
                    <label
                      htmlFor=""
                      className="text-[#272727] text-[17px] font-semibold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full outline-none border border-[#d33847] h-[40px] database_chosen text-[#272727] px-3 rounded-sm"
                      defaultValue=""
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                    <input type="hidden" className="name" />
                  </div>
                  <div className="p-6 md:w-[400px] w-full">
                    <label
                      htmlFor=""
                      className="text-[#272727] text-[17px] font-semibold"
                    >
                      Your Email
                    </label>
                    <div className="">
                      <input
                        type="email"
                        className="w-full outline-none border border-[#d33847] h-[40px] app_type_chosen text-[#272727] px-3 rounded-sm"
                        defaultValue=""
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                      <input type="hidden" className="web_type_price" />
                    </div>
                  </div>
                  <div className="p-6 md:w-[400px] w-full">
                    <label
                      htmlFor=""
                      className="text-[#272727] text-[17px] font-semibold"
                    >
                      Your Phone Number
                    </label>
                    <input
                      type="number"
                      className="w-full outline-none border border-[#d33847] h-[40px] database_chosen text-[#272727] px-3 rounded-sm"
                      defaultValue=""
                      onChange={(event) => {
                        setPN(event.target.value);
                      }}
                    />
                    <input type="hidden" className="phone_number" />
                  </div>
                  <div className="p-6 md:w-[400px] w-full">
                    <label
                      htmlFor=""
                      className="text-[#272727] text-[17px] font-semibold"
                    >
                      Your Message
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className="w-full outline-none border border-[#d33847] h-[40px] app_type_chosen text-[#272727] px-3 rounded-sm"
                        defaultValue=""
                        onChange={(event) => {
                          setMessage(event.target.value);
                        }}
                      />
                      <input type="hidden" className="message" />
                    </div>
                  </div>
                </div>
                <div className="flex items-end flex-wrap justify-evenly">
                  <div className="md:w-[400px] w-full p-6">
                    <label
                      htmlFor=""
                      className="text-[#272727] text-[17px] font-semibold"
                    >
                      Choose Number Of Pages
                    </label>
                    <input
                      type="number"
                      className="w-full outline-none border border-[#d33847] h-[40px] number_of_pages_count text-[#272727] px-3 rounded-sm"
                      min={1}
                      onChange={(event) => {
                        setNumberOfPages(event.target.value);
                      }}
                    />
                  </div>
                  <div className="p-6 md:w-[400px] div w-full">
                    <div className="w-full md:flex justify-center items-stretch flex-wrap">
                      <div className="w-full flex justify-center items-stretch flex-wrap">
                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-[#272727] text-[17px] font-semibold"
                          >
                            Estimated Development Cost
                          </label>
                          <div className="estimated_development_cost_div">
                            <input
                              type="text"
                              className="w-full outline-none border border-[#d33847] h-[40px] estimated_development_cost_input text-[#272727] px-3 rounded-sm"
                              defaultValue=""
                              readOnly=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end flex-wrap justify-evenly">
                  <div className="md:w-[400px] w-full p-6">
                    <label
                      htmlFor=""
                      className="text-[#272727] text-[17px] font-semibold"
                    >
                      Upload File
                    </label>
                    <input
                      type="file"
                      className="w-full outline-none border border-[#d33847] h-[40px]  text-[#272727] px-3 rounded-sm py-1"
                      min={1}
                      onChange={(event) => {
                        setFile(event.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-end flex-wrap justify-evenly">
                  <div className="md:w-[400px] total_price_btn w-full p-6">
                    <button
                      className="w-full h-[40px] border rounded-md text-white bg-[#d33847] hover:text-white hover:bg-[#d33847] total_price_btn"
                      style={{ background: "#d33847" }}
                      onClick={function () {
                        var app_tech_price =
                          document.getElementsByClassName("app_tech_price")[0];
                        var app_type_price =
                          document.getElementsByClassName("app_type_price")[0];
                        var estimated_development_cost_input =
                          document.getElementsByClassName(
                            "estimated_development_cost_input"
                          )[0];
                        var number_of_pages_count =
                          document.getElementsByClassName(
                            "number_of_pages_count"
                          )[0];

                        estimated_development_cost_input.value =
                          app_tech_price.value *
                          app_type_price.value *
                          number_of_pages_count.value;
                        setTotalEstimate(
                          estimated_development_cost_input.value
                        );
                        console.log(estimated_development_cost_input.value);
                      }}
                    >
                      Total Price
                    </button>
                  </div>
                  <div
                    className="md:w-[400px] div w-full p-6"
                    onClick={availablesoon}
                  >
                    <button className="text-[20px] py-[4px] w-full text-center border bg-[#d33847] text-white">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <Please_Login_Page />
          </div>
        </>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App_Dev_Cal;
