import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../Constant/Constant";
import contact_banner from "../assets/images/contact_banner.png";

import nuxt from "../assets/images/nuxt.png";
import react from "../assets/images/React.png";
import gatsby from "../assets/images/gatsby.png";
import svelte from "../assets/images/svelte.png";
import blitz from "../assets/images/blitz.png";
import astro from "../assets/images/astro.png";
import hexo from "../assets/images/hexo.png";
import eleventy from "../assets/images/eleventy.svg";
import docusaurus from "../assets/images/docusaurus.svg";
import preact from "../assets/images/preact.png";
import solidstart from "../assets/images/solidstart.jfif";
import dojo from "../assets/images/dojo.jpg";
import ember from "../assets/images/ember.jfif";
import vue from "../assets/images/vue.png";
import ionic from "../assets/images/ionic.png";
import angular from "../assets/images/angular.png";
import polymer from "../assets/images/polymer.png";
import gridsome from "../assets/images/gridsome.jfif";
import umijs from "../assets/images/umijs.png";
import sapper from "../assets/images/sapper.avif";
import saber from "../assets/images/saber.png";
import stencil from "../assets/images/stencil.png";
import redwood from "../assets/images/redwood.png";
import hugo from "../assets/images/hugo.png";
import jeckyll from "../assets/images/jeckyll.jfif";
import brunch from "../assets/images/brunch.png";
import vite from "../assets/images/vite.svg";
import parcel from "../assets/images/parcel.png";
import sanity from "../assets/images/sanity.png";
import html_css_js from "../assets/images/html_css_js.png";

import Lua from "../assets/images/Lua.png";
import haskell from "../assets/images/haskell.png";
import elixir from "../assets/images/elixir.jfif";
import Java from "../assets/images/Java.png";
import perl from "../assets/images/perl.png";
import drupal from "../assets/images/drupal.png";
import cpp from "../assets/images/c++.png";
import Rust from "../assets/images/Rust.png";
import codeigniter from "../assets/images/codeigniter.png";
import asp_net from "../assets/images/asp.net.jfif";
import rubyonrails from "../assets/images/rubyonrails.webp";
import springboot from "../assets/images/springboot.png";
import python from "../assets/images/python.jfif";
import golang from "../assets/images/golang.png";
import opencart from "../assets/images/opencart.png";
import expressjs from "../assets/images/expressjs.png";
import flask from "../assets/images/flask.png";
import django from "../assets/images/django.jpg";
import nodejs from "../assets/images/nodejs.svg";
import laravel from "../assets/images/laravel.png";
import wordpress from "../assets/images/wordpress.png";
import php from "../assets/images/php.jfif";

import MySQL from "../assets/images/MySQL.png";
import mongodb from "../assets/images/mongodb.webp";
import postgresql from "../assets/images/postgresql.webp";
import sqlite from "../assets/images/sqlite.jfif";
import oracle from "../assets/images/oracle.png";
import mariadb from "../assets/images/mariadb.jfif";
import mssql from "../assets/images/mssql.png";
import redis from "../assets/images/redis.png";
import Cassandra from "../assets/images/Cassandra.svg";
import elasticsearch from "../assets/images/elasticsearch.png";
import neo4j from "../assets/images/neo4j.png";
import couchdb from "../assets/images/couchdb.png";
import rethinkdb from "../assets/images/rethinkdb.png";
import couchbase from "../assets/images/couchbase.webp";
import hbase from "../assets/images/hbase.png";

import ecommerce from "../assets/images/ecommerce.png";
import news from "../assets/images/news.png";
import blogging from "../assets/images/blogging.png";
import custom from "../assets/images/custom.png";
import axios from "axios";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import Please_Login_Page from "./Please_Login_Page";

function WebSite_Dev_Cal() {
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

  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");
  const [database, setDatabase] = useState("");
  const [webType, setWebType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [totalEstimate, setTotalEstimate] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [file, setFile] = useState("");

  const [data, setData] = useState();

  const uuid = require("uuid");
  const req_id = uuid.v4();

  useEffect(() => {
    setData(totalEstimate);
  }, [totalEstimate]);

  const navigate = useNavigate();

  const formdata = new FormData();
  formdata.append("req_id", req_id);
  formdata.append("file", file);
  formdata.append("name", name);
  formdata.append("email", email);
  formdata.append("phoneNumber", phoneNumber);
  formdata.append("message", message);
  formdata.append("totalEstimate", totalEstimate);
  formdata.append("numberOfPages", numberOfPages);
  formdata.append("frontend", frontend);
  formdata.append("backend", backend);
  formdata.append("database", database);
  formdata.append("webType", webType);
  formdata.append("paymentid", "paymentid");
  formdata.append("payment_gateway", "payment_gateway");
  formdata.append("payment_status", "payment_status");

  const webRequest = () => {
    axios.post(`${API}/website_request`, formdata).then(() => {
      console.log("success");
      console.log(data);
      navigate("/payment", { state: { data: data } });
      localStorage.setItem("amount", totalEstimate);
      localStorage.setItem("projectType", "Website");
      localStorage.setItem("req_id", req_id);
    });
  };

  return (
    <>
      <div>
        <Navbar />
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
                    Website Development
                  </h1>
                  <div className="flex_ic font-bold text-[15px] leading-[26px]">
                    <div className="text-[white] md:text-[18px] text-[15px]  md:mt-12 mt-4 cursor-pointer">
                      <a href="/">
                        &nbsp;Choose your desireable technologies and calculate
                        the estimated budget of your website.
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full bg-white py-[80px]">
              <div className="max-w-[1250px] m-auto sm:flex  items-stretch flex-wrap justify-center div">
                <div className="sm:w-[300px] p-6">
                  <h3 className="mb-5 text-lg font-semibold text-gray-700 text-center">
                    Choose Frontend Technology:
                  </h3>
                  <ul className="w-full  h-[80vh] overflow-y-scroll my-10">
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Nuxtjs");

                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[0].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[0].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 11;
                        // var frontend_price;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 0) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Nuxtjs_option"
                        defaultValue="Nuxtjs"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Nuxtjs_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={nuxt}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Nuxtjs
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Build your next Vue.js application with confidence
                            using Nuxt
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Reactjs");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        document.getElementsByClassName(
                          "frontend_label"
                        )[1].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[1].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 12;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 1) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Reactjs_option"
                        defaultValue="Reactjs"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Reactjs_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={react}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Reactjs
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
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Gatsyby.js");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        document.getElementsByClassName(
                          "frontend_label"
                        )[2].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[2].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 13;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 2) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Gatsyby.js_option"
                        defaultValue="Gatsyby.js"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Gatsyby.js_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={gatsby}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Gatsyby.js
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Gatsby is a React-based open source framework with
                            performance, scalability and security built-in.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Svelte");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[3].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[3].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 14;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 3) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Svelte_option"
                        defaultValue="Svelte"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Svelte_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={svelte}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Svelte
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Svelte is a compiler that generates minimal and
                            highly optimized JavaScript code from our sources
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Blitz.js");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[4].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[4].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 15;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 4) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Blitz.js_option"
                        defaultValue="Blitz.js"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Blitz.js_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={blitz}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Blitz.js
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Blitz.js is an up-and-coming JavaScript framework
                            built on React and Next.js
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Astro");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[5].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[5].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 16;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 5) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Astro_option"
                        defaultValue="Astro"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Astro_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={astro}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Astro
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Astro is the web framework for building fast,
                            content-focused websites.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Hexo");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[6].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[6].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 17;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 6) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Hexo_option"
                        defaultValue="Hexo"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Hexo_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={hexo}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Hexo
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            A JavaScript library for building user
                            interfaces.Hexo is a fast, simple & powerful blog
                            framework powered by Node.js.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Eleventy");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[7].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[7].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 18;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 7) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Eleventy_option"
                        defaultValue="Eleventy"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Eleventy_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={eleventy}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Eleventy
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            A simpler static site generator. An alternative to
                            Jekyll. Written in JavaScript. Transforms a
                            directory of templates (of varying types) into HTML
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Docusaurus1");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[8].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[8].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 19;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 8) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Docusaurus1_option"
                        defaultValue="Docusaurus1"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Docusaurus1_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={docusaurus}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Docusaurus1
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            An optimized site generator in React. Docusaurus
                            helps you to move fast and write content. Build
                            documentation websites, blogs, marketing pages, and
                            more.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Docusaurus2");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[9].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[9].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 20;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 9) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Docusaurus2_option"
                        defaultValue="Docusaurus2"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Docusaurus2_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={docusaurus}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Docusaurus2
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            An optimized site generator in React. Docusaurus
                            helps you to move fast and write content. Build
                            documentation websites, blogs, marketing pages, and
                            more.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Preact");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[10].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[10].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 21;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 10) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Preact_option"
                        defaultValue="Preact"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Preact_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={preact}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Preact
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Preact is a fast 3kB alternative to React with the
                            same modern API.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("SolidStart");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[11].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[11].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 22;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 11) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="SolidStart_option"
                        defaultValue="SolidStart"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="SolidStart_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={solidstart}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              SolidStart
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            SolidStart is considered a meta-framework (a
                            framework built on top of another framework)
                            because, at it's core, SolidStart is powered by
                            SolidJS and the Solid .
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Dojo");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[12].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[12].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 23;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 12) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Dojo_option"
                        defaultValue="Dojo"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Dojo_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={dojo}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Dojo
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            A JavaScript toolkit that saves you time and scales
                            with your development process.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Ember.js");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[13].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[13].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 24;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 13) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Ember.js_option"
                        defaultValue="Ember.js"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Ember.js_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={ember}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Ember.js
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Ember.js is a productive, battle-tested JavaScript
                            framework for building modern web applications.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Vuejs");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[14].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[14].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 25;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 14) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Vuejs_option"
                        defaultValue="Vuejs"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Vuejs_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img src={vue} alt="some desc" className="h-full" />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Vuejs
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Vue.js lets you extend HTML with HTML attributes
                            called directives. Vue.js directives offers
                            functionality to HTML applications.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Ionic Angular");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[15].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[15].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 26;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 15) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Ionic_Angular_option"
                        defaultValue="Ionic_Angular"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Ionic_Angular_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={ionic}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Ionic_Angular
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
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Angular");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[16].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[16].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 27;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 16) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Angular_option"
                        defaultValue="Angular"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Angular_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={angular}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Angular
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Ionic is a framework that allows us to develop
                            mobile apps and websites using web technologies –
                            HTML, CSS and Javascript basically.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Polymer");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[17].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[17].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 28;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 17) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Polymer_option"
                        defaultValue="Polymer"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Polymer_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={polymer}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Polymer
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Polymer.js is a JavaScript library created by Google
                            that allows reusing the HTML elements for building
                            applications with components.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Ionic React");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[18].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[18].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 29;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 18) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Ionic_React_option"
                        defaultValue="Ionic_React"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Ionic_React_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={ionic}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Ionic_React
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Ionic React is native React version of Ionic
                            Framework, the free, open source SDK powering
                            millions of mission-critical apps all over the
                            world.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Gridsome");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[19].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[19].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 30;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 19) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Gridsome_option"
                        defaultValue="Gridsome"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Gridsome_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={gridsome}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Gridsome
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Enjoy a modern development stack. Build websites
                            with modern tools like Vue.js, webpack and Node.js.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Umi.js");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[20].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[20].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 31;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 20) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Umi.js_option"
                        defaultValue="Umi.js"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Umi.js_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={umijs}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Umi.js
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            And Umi is a routing-based framework that supports
                            next.js-like conventional routing and various
                            advanced routing functions, such as routing-level
                            on-demand
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Sapper");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[21].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[21].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 32;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 21) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Sapper_option"
                        defaultValue="Sapper"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Sapper_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={sapper}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Sapper
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Sapper is the companion component framework to
                            Svelte that helps you build larger and more complex
                            apps in a fast and efficient way.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Saber");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[22].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[22].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 33;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 22) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Saber_option"
                        defaultValue="Saber"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Saber_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={saber}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Saber
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Saber is a simple yet powerful framework for
                            building modern static websites.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Stencil");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[23].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[23].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 34;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 23) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Stencil_option"
                        defaultValue="Stencil"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Stencil_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={stencil}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Stencil
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Stencil was created to power the components for
                            Ionic Framework - a cross-platform mobile
                            development technology stack used by more than 5M
                            developers worldwide
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Redwood.JS");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[24].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[24].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 35;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 24) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Redwood.JS_option"
                        defaultValue="Redwood.JS"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Redwood.JS_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={redwood}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Redwood.JS
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            explore more territory, more quickly. We begin by
                            crafting a more integrated framework, beautifully
                            weaving together the best parts of: React.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Hugo");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[25].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[25].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 36;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 25) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Hugo_option"
                        defaultValue="Hugo"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Hugo_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={hugo}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Hugo
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Hugo is one of the most popular open-source static
                            site generators. With its amazing speed and
                            flexibility
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Jekyll");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[26].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[26].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 37;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 26) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Jekyll_option"
                        defaultValue="Jekyll"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Jekyll_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={jeckyll}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Jekyll
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Jekyll takes your content, renders Markdown and
                            Liquid templates, and spits out a complete, static
                            website ready to be served by Apache, Nginx or
                            another web
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Brunch");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[27].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[27].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 38;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 27) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Brunch_option"
                        defaultValue="Brunch"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Brunch_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={brunch}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Brunch
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Brunch builds, lints, compiles, concatenates and
                            shrinks your HTML5 app in an ultra-simple way. No
                            more Grunt / Gulp mess
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Vite");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[28].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[28].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 39;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 28) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Vite_option"
                        defaultValue="Vite"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Vite_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={vite}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Vite
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Vite is a new breed of frontend build tooling that
                            significantly improves the frontend development
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Parcel");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[29].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[29].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 40;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 29) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Parcel_option"
                        defaultValue="Parcel"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Parcel_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={parcel}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Parcel
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Parcel's JavaScript compiler is built on SWC, which
                            handles transpiling JavaScript, JSX, and TypeScript.
                            On top of SWC, Parcel implements dependency
                            collection
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("Sanity");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[30].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[30].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 41;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 30) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Sanity_option"
                        defaultValue="Sanity"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="Sanity_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={sanity}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Sanity
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Sanity is the platform for structured content that
                            lets your team work together in real-time to build
                            engaging digital experiences across channels.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 frontends rounded-md"
                      onClick={function () {
                        setFrontend("HTML_CSS_JS_PHP");
                        var frontends =
                          document.getElementsByClassName("frontends");
                        console.log(frontends.length);
                        document.getElementsByClassName(
                          "frontend_label"
                        )[31].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "frontend_chosen"
                        )[0].value =
                          document.getElementsByClassName("frontend")[31].value;
                        document.getElementsByClassName(
                          "frontend_price"
                        )[0].value = 42;
                        // total_amount();
                        for (var i = 0; i < frontends.length; i++) {
                          if (i !== 31) {
                            document.getElementsByClassName("frontend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="HTML_CSS_JS_PHP_option"
                        defaultValue="HTML_CSS_JS_PHP"
                        className="hidden peer frontend"
                        required=""
                      />
                      <label
                        htmlFor="HTML_CSS_JS_PHP_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 frontend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={html_css_js}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-sm font-semibold">
                              HTML_CSS_JS_PHP
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
                <div className="sm:w-[300px] p-6">
                  <h3 className="mb-5 text-lg font-semibold text-gray-700 dark:text-white text-center h-[53px]">
                    Choose Backend Technology:
                  </h3>
                  <ul className="w-full h-[80vh] overflow-y-scroll my-10">
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Lua");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[0].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[0].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 11;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 0) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Lua_option"
                        defaultValue="Lua"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Lua_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img src={Lua} alt="some desc" className="h-full" />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Lua
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Lua is a lightweight, high-level, multi-paradigm
                            programming language designed primarily for embedded
                            use in applications.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Haskell");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[1].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[1].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 12;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 1) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Haskell_option"
                        defaultValue="Haskell"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Haskell_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={haskell}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Haskell
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Haskell is more intelligent than other popular
                            programming languages such as Java, C, C++, PHP,
                            etc.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Elixir");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[2].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[2].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 13;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 2) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Elixir_option"
                        defaultValue="Elixir"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Elixir_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={elixir}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Elixir
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Elixir runs on the Erlang VM, known for creating
                            low-latency, distributed, and fault-tolerant
                            systems.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Java");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[3].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[3].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 14;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 3) {
                            document.getElementsByClassName("backend_label")[
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
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Java_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
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
                            Java is a powerful general-purpose programming
                            language. It is used to develop desktop and mobile
                            applications, big data processing, embedded systems,
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Perl");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[4].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[4].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 15;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 4) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Perl_option"
                        defaultValue="Perl"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Perl_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={perl}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Perl
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Perl is a general-purpose programming language
                            originally developed for text manipulation and now
                            used for a wide range of tasks including system
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Drupal");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[5].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[5].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 16;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 5) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Drupal_option"
                        defaultValue="Drupal"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Drupal_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={drupal}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Drupal
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            With robust content management tools, sophisticated
                            APIs for multichannel publishing, and a track record
                            of continuous innovation—Drupal is the best digital
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("C++");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[6].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[6].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 17;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 6) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="C++_option"
                        defaultValue="C++"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="C++_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img src={cpp} alt="some desc" className="h-full" />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              C++
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            C++ is a cross-platform language that can be used to
                            create high-performance applications
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Rust");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[7].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[7].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 18;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 7) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Rust_option"
                        defaultValue="Rust"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Rust_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={Rust}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Rust
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Rust is a multi-paradigm, general-purpose
                            programming language. Rust emphasizes performance,
                            type safety, and concurrency
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Codeigniter");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[8].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[8].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 19;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 8) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Codeigniter_option"
                        defaultValue="Codeigniter"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Codeigniter_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={codeigniter}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Codeigniter
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            CodeIgniter is a powerful PHP framework with a very
                            small footprint, built for developers who need a
                            simple and elegant toolkit to create full-featured
                            web
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("ASP.NET");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[9].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[9].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 20;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 9) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="ASP.NET_option"
                        defaultValue="ASP.NET"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="ASP.NET_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={asp_net}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              ASP.NET
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            ASP.NET is an open-source, server-side
                            web-application framework designed for web
                            development to produce dynamic web pages.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Ruby On Rails");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[10].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[10].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 21;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 10) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Ruby_On_Rails_option"
                        defaultValue="Ruby_On_Rails"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Ruby_On_Rails_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={rubyonrails}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Ruby_On_Rails
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            A web-app framework that includes everything needed
                            to create database-backed web applications according
                            to the Model-View-Controller (MVC) pattern.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Spring");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[11].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[11].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 22;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 11) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Spring_option"
                        defaultValue="Spring"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Spring_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={springboot}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Spring
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Spring is a lightweight framework. It can be thought
                            of as a framework of frameworks because it provides
                            support to various frameworks such as Struts,
                            Hibernate
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Python");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[12].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[12].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 23;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 12) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Python_option"
                        defaultValue="Python"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Python_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={python}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Python
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Spring is a lightweight framework. It can be thought
                            of as a framework of frameworks because it provides
                            support to various frameworks such as Struts,
                            Hibernate
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("GoLang");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[13].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[13].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 24;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 13) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Go_lang_option"
                        defaultValue="Go_lang"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Go_lang_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={golang}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Go_lang
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Go is an open source programming language that makes
                            it easy to build simple, reliable, and efficient
                            software.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("OpenCart");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[14].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[14].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 25;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 14) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="OpenCart_option"
                        defaultValue="OpenCart"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="OpenCart_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={opencart}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              OpenCart
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            A free shopping cart system. OpenCart is an open
                            source PHP-based online e-commerce solution.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Express");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[15].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[15].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 26;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 15) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Express_option"
                        defaultValue="Express"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Express_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={expressjs}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Express
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Express is a minimal and flexible Node.js web
                            application framework that provides a robust set of
                            features for web and mobile applications.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Flask");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[16].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[16].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 27;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 16) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Flask_option"
                        defaultValue="Flask"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Flask_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={flask}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Flask
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Flask is a micro web framework written in Python. It
                            is classified as a microframework because it does
                            not require particular tools or libraries.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Django");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[17].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[17].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 28;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 17) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Django_option"
                        defaultValue="Django"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Django_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={django}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Django
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Django is a high-level Python web framework that
                            encourages rapid development and clean, pragmatic
                            design.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Nodejs");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[18].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[18].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 29;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 18) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Nodejs_option"
                        defaultValue="Nodejs"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Nodejs_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={nodejs}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Nodejs
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Node.js is an open source server environment.
                            Node.js allows you to run JavaScript on the server.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Laravel");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[19].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[19].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 30;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 19) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Laravel_option"
                        defaultValue="Laravel"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Laravel_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={laravel}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Laravel
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Laravel is a PHP web application framework with
                            expressive, elegant syntax. We've already laid the
                            foundation
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("Wordpress");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[20].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[20].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 31;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 20) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Wordpress_option"
                        defaultValue="Wordpress"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Wordpress_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={wordpress}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Wordpress
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            WordPress (WP or WordPress.org) is a free and
                            open-source content management system (CMS) written
                            in hypertext preprocessor language and paired with a
                            MySQL
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 backends rounded-md"
                      onClick={function () {
                        setBackend("PHP");
                        var backends =
                          document.getElementsByClassName("backends");
                        document.getElementsByClassName(
                          "backend_label"
                        )[21].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "backend_chosen"
                        )[0].value =
                          document.getElementsByClassName("backend")[21].value;
                        document.getElementsByClassName(
                          "backend_price"
                        )[0].value = 32;
                        // var backend_price;
                        // total_amount();
                        for (let i = 0; i < backends.length; i++) {
                          if (i !== 21) {
                            document.getElementsByClassName("backend_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Php_option"
                        defaultValue="Php"
                        className="hidden peer backend"
                        required=""
                      />
                      <label
                        htmlFor="Php_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 backend_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img src={php} alt="some desc" className="h-full" />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Php
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            A popular general-purpose scripting language that is
                            especially suited to web development.
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="sm:w-[300px] p-6">
                  <h3 className="mb-5 text-lg font-semibold text-gray-700 dark:text-white text-center">
                    Choose Database Technology:
                  </h3>
                  <ul className="w-full h-[80vh] overflow-y-scroll my-10">
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("MySQL");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[0].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[0].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 11;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 0) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="MySQL_option"
                        defaultValue="MySQL"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="MySQL_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={MySQL}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              MySQL
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            MySQL is a widely used relational database
                            management system (RDBMS). MySQL is free and
                            open-source. MySQL is ideal for both small and large
                            applications.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("MongoDB");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[1].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[1].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 12;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 1) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="MongoDB_option"
                        defaultValue="MongoDB"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="MongoDB_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={mongodb}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              MongoDB
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            MongoDB is a source-available cross-platform
                            document-oriented database program. Classified as a
                            NoSQL database program, MongoDB uses JSON-like
                            documents
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("PostgreSQL");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[2].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[2].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 13;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 2) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="PostgreSQL_option"
                        defaultValue="PostgreSQL"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="PostgreSQL_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={postgresql}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              PostgreSQL
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            PostgreSQL also known as Postgres, is a free and
                            open-source relational database management system
                            (RDBMS) emphasizing extensibility and SQL
                            compliance.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("SQLite");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[3].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[3].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 14;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 3) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="SQLite_option"
                        defaultValue="SQLite"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="SQLite_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={sqlite}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              SQLite
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            SQLite is a C-language library that implements a
                            small, fast, self-contained, high-reliability,
                            full-featured, SQL database engine.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("Oracle");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[4].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[4].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 15;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 4) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Oracle_option"
                        defaultValue="Oracle"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="Oracle_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={oracle}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Oracle
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
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("MariaDB");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[5].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[5].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 16;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 5) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="MariaDB_option"
                        defaultValue="MariaDB"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="MariaDB_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={mariadb}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              MariaDB
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            MariaDB Server is one of the most popular open
                            source relational databases.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("MSSQL");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[6].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[6].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 17;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 6) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="MSSQL_option"
                        defaultValue="MSSQL"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="MSSQL_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={mssql}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              MSSQL
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            MS SQL Server is a relational database management
                            system (RDBMS) developed by Microsoft.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("Redis");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[7].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[7].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 18;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 7) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Redis_option"
                        defaultValue="Redis"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="Redis_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={redis}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Redis
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Redis is an open source (BSD licensed), in-memory
                            data structure store, used as a database, cache, and
                            message broker. Redis provides data structures
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("Cassandra");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[8].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[8].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 19;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 8) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Cassandra_option"
                        defaultValue="Cassandra"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="Cassandra_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={Cassandra}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Cassandra
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Apache Cassandra is an open source NoSQL distributed
                            database trusted by thousands of companies for
                            scalability and high availability without
                            compromising
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("Elasticsearch");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[9].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[9].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 20;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 9) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Elasticsearch_option"
                        defaultValue="Elasticsearch"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="Elasticsearch_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={elasticsearch}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Elasticsearch
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Elasticsearch is the world’s leading free and open
                            search and analytics solution. With an emphasis on
                            speed, scale, and relevance it's transforming how
                            the world uses data.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("Neo4j");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[10].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[10].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 21;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 10) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Neo4j_option"
                        defaultValue="Neo4j"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="Neo4j_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={neo4j}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Neo4j
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Neo4j is the only enterprise-strength graph database
                            that combines native graph storage, advanced
                            security, scalable speed-optimized architecture, and
                            ACID
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("CouchDB");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[11].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[11].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 22;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 11) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="CouchDB_option"
                        defaultValue="CouchDB"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="CouchDB_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={couchdb}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              CouchDB
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            CouchDB is also a clustered database that allows you
                            to run a single logical database server on any
                            number of servers or VMs. A CouchDB cluster improves
                            on the
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("RethinkDB");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[12].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[12].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 23;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 12) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="RethinkDB_option"
                        defaultValue="RethinkDB"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="RethinkDB_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={rethinkdb}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              RethinkDB
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            When your app polls for data, it becomes slow,
                            unscalable, and cumbersome to maintain. RethinkDB is
                            the open-source, scalable database that makes
                            building
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("Couchbase");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[13].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[13].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 24;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 13) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="Couchbase_option"
                        defaultValue="Couchbase"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="Couchbase_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={couchbase}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              Couchbase
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Couchbase is an award-winning distributed NoSQL
                            cloud database that delivers unmatched versatility,
                            performance, scalability, and financial value for
                            all of
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      className="my-2 databases rounded-md"
                      onClick={function () {
                        setDatabase("HBase");
                        var databases =
                          document.getElementsByClassName("databases");
                        document.getElementsByClassName(
                          "database_label"
                        )[14].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "database_chosen"
                        )[0].value =
                          document.getElementsByClassName("database")[14].value;
                        document.getElementsByClassName(
                          "database_price"
                        )[0].value = 25;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < databases.length; i++) {
                          if (i !== 14) {
                            document.getElementsByClassName("database_label")[
                              i
                            ].style.border = "2px solid #e5e7eb";
                          }
                        }
                      }}
                    >
                      <input
                        type="radio"
                        id="HBase_option"
                        defaultValue="HBase"
                        className="hidden peer database"
                        required=""
                      />
                      <label
                        htmlFor="HBase_option"
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer   hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 database_label"
                      >
                        <div className="block">
                          <div className="h-[40px]">
                            <img
                              src={hbase}
                              alt="some desc"
                              className="h-full"
                            />
                          </div>
                          <div className="flex justify-between">
                            <div className="w-full text-lg font-semibold">
                              HBase
                            </div>
                            {/* <h3 class="text-md font-semibold text-gray-700 w-[150px]">$10 (1 page)</h3> */}
                          </div>
                          <div className="w-full text-sm">
                            Apache HBase™ is the Hadoop database, a distributed,
                            scalable, big data store. Use Apache HBase™ when you
                            need random, realtime read/write access to your
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="sm:w-[300px] p-6">
                  <h3 className="mb-5 text-lg font-semibold text-gray-700 h-[51px] text-center">
                    Choose Application type:
                  </h3>
                  <ul className="w-full  h-[80vh] overflow-y-scroll my-10">
                    <li
                      className="my-2 rounded-md web_types"
                      onClick={function () {
                        setWebType("Ecommerce");
                        var web_types =
                          document.getElementsByClassName("web_types");
                        document.getElementsByClassName(
                          "app_type_label"
                        )[0].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "app_type_chosen"
                        )[0].value =
                          document.getElementsByClassName("app_type")[0].value;
                        document.getElementsByClassName(
                          "web_type_price"
                        )[0].value = 11;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < web_types.length; i++) {
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
                      className="my-2 rounded-md web_types"
                      onClick={function () {
                        setWebType("News");
                        var web_types =
                          document.getElementsByClassName("web_types");
                        document.getElementsByClassName(
                          "app_type_label"
                        )[1].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "app_type_chosen"
                        )[0].value =
                          document.getElementsByClassName("app_type")[1].value;
                        document.getElementsByClassName(
                          "web_type_price"
                        )[0].value = 12;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < web_types.length; i++) {
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
                      className="my-2 rounded-md web_types"
                      onClick={function () {
                        setWebType("Blogging");
                        var web_types =
                          document.getElementsByClassName("web_types");
                        document.getElementsByClassName(
                          "app_type_label"
                        )[2].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "app_type_chosen"
                        )[0].value =
                          document.getElementsByClassName("app_type")[2].value;
                        document.getElementsByClassName(
                          "web_type_price"
                        )[0].value = 13;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < web_types.length; i++) {
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
                      className="my-2 rounded-md web_types"
                      onClick={function () {
                        setWebType("Custom");
                        var web_types =
                          document.getElementsByClassName("web_types");
                        document.getElementsByClassName(
                          "app_type_label"
                        )[3].style.border = "2px solid #d33847";
                        document.getElementsByClassName(
                          "app_type_chosen"
                        )[0].value =
                          document.getElementsByClassName("app_type")[3].value;
                        document.getElementsByClassName(
                          "web_type_price"
                        )[0].value = 14;
                        // var database_price;
                        // total_amount();
                        for (let i = 0; i < web_types.length; i++) {
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
                        className="inline-flex justify-between items-center py-3 px-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50 app_type_label"
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
              <div className="md:flex max-w-[1250px] m-auto justify-center">
                <div className="grow shrink p-8 max-w-[830px]">
                  <h3 className="mb-5 text-lg font-semibold text-gray-700 text-center">
                    Technologies Choosen:
                  </h3>
                  <div className="flex flex-wrap">
                    <div className="md:w-[380px] px-5 py-3 w-full">
                      <label
                        htmlFor=""
                        className="text-[#272727] text-[17px] font-semibold"
                      >
                        Frontend Chosen:
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none border border-[#d33847] h-[40px] frontend_chosen text-[#272727] px-3 rounded-sm"
                        defaultValue=""
                        readOnly=""
                        onChange={(event) => {
                          setFrontend(event.target.value);
                        }}
                      />
                      <input type="hidden" className="frontend_price" />
                    </div>
                    <div className="md:w-[380px] px-5 py-3 w-full">
                      <label
                        htmlFor=""
                        className="text-[#272727] text-[17px] font-semibold"
                      >
                        Backend Chosen:
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none border border-[#d33847] h-[40px] backend_chosen text-[#272727] px-3 rounded-sm"
                        defaultValue=""
                        readOnly=""
                        onChange={(event) => {
                          setBackend(event.target.value);
                        }}
                      />
                      <input type="hidden" className="backend_price" />
                    </div>
                    <div className="md:w-[380px] px-5 py-3 w-full">
                      <label
                        htmlFor=""
                        className="text-[#272727] text-[17px] font-semibold"
                      >
                        Database Chosen:
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none border border-[#d33847] h-[40px] database_chosen text-[#272727] px-3 rounded-sm"
                        defaultValue=""
                        readOnly=""
                        onChange={(event) => {
                          setDatabase(event.target.value);
                        }}
                      />
                      <input type="hidden" className="database_price" />
                    </div>
                    <div className="md:w-[380px] px-5 py-3 w-full">
                      <label
                        htmlFor=""
                        className="text-[#272727] text-[17px] font-semibold"
                      >
                        Website Type Chosen
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="w-full outline-none border border-[#d33847] h-[40px] app_type_chosen text-[#272727] px-3 rounded-sm"
                          defaultValue=""
                          readOnly
                          onChange={(event) => {
                            setWebType(event.target.value);
                          }}
                        />
                        <input type="hidden" className="web_type_price" />
                      </div>
                    </div>
                    <div className="md:w-[380px] px-5 py-3 w-full">
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
                    <div className="md:w-[380px] px-5 py-3 w-full">
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
                    <div className="md:w-[380px] px-5 py-3 w-full">
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
                          setPhoneNumber(event.target.value);
                        }}
                      />
                      <input type="hidden" className="phone_number" />
                    </div>
                    <div className="md:w-[380px] px-5 py-3 w-full">
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
                    <div className="md:w-[380px] px-5 py-3 w-full">
                      <label
                        htmlFor=""
                        className="text-[#272727] text-[17px] font-semibold"
                      >
                        Choose Number Of Pages
                      </label>
                      <input
                        type="number"
                        className="w-full outline-none border border-[#d33847] h-[40px] number_of_pages_count text-[#272727] px-3 rounded-sm"
                        defaultValue=""
                        min={1}
                        onChange={(event) => {
                          setNumberOfPages(event.target.value);
                        }}
                      />
                    </div>
                    <div className="md:w-[380px] px-5 py-3 w-full">
                      <label
                        htmlFor=""
                        className="text-[#272727] text-[17px] font-semibold"
                      >
                        Total Estimate:
                      </label>
                      <input
                        type="text"
                        className="w-full outline-none border border-[#d33847] h-[40px] total_estimate text-[#272727] px-3 rounded-sm"
                        readOnly
                        onChange={(event) => {
                          setTotalEstimate(event.target.value);
                        }}
                      />
                    </div>
                    <div className="md:w-[380px] px-5 py-3 w-full">
                      <label
                        htmlFor=""
                        className="text-[#272727] text-[17px] font-semibold"
                      >
                        Upload File
                      </label>
                      <input
                        type="file"
                        className="w-full outline-none border border-[#d33847] h-[40px]  text-[#272727] px-3 rounded-sm p-1"
                        readOnly
                        onChange={(event) => {
                          setFile(event.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                  <div className="md:flex mt-7">
                    <div className="md:w-[380px] px-5">
                      <button
                        className="w-full h-[40px] border rounded-md text-white bg-[#d33847] hover:text-white hover:bg-[#d33847] total_price_btn"
                        onClick={function () {
                          var frontend_price =
                            document.getElementsByClassName(
                              "frontend_price"
                            )[0];
                          var backend_price =
                            document.getElementsByClassName("backend_price")[0];
                          var database_price =
                            document.getElementsByClassName(
                              "database_price"
                            )[0];
                          var web_type_price =
                            document.getElementsByClassName(
                              "web_type_price"
                            )[0];
                          var number_of_pages_count =
                            document.getElementsByClassName(
                              "number_of_pages_count"
                            )[0];
                          var total_estimate =
                            document.getElementsByClassName(
                              "total_estimate"
                            )[0];

                          // total_estimate.value = "$" + ((10+10+10+10)*number_of_pages_count.value);
                          total_estimate.value =
                            (parseInt(frontend_price.value) +
                              parseInt(backend_price.value) +
                              parseInt(database_price.value) +
                              parseInt(web_type_price.value)) *
                            number_of_pages_count.value;

                          setTotalEstimate(total_estimate.value);
                        }}
                      >
                        Estimated Cost
                      </button>
                    </div>
                    <div
                      className="md:w-[380px] div w-full px-5"
                      onClick={webRequest}
                    >
                      <button
                        className="paybtn text-[20px] py-[4px] w-full text-center border hover:bg-slate-50 z-0"
                        style={{ zIndex: 0 }}
                      >
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
            <Please_Login_Page />
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default WebSite_Dev_Cal;
