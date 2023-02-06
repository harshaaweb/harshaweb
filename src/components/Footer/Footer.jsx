import React, { useEffect, useState } from "react";
import { RiMailSendFill } from "react-icons/ri";
import { SiFreelancer, SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { GrLinkedin, GrMail } from "react-icons/gr";
import { BsChatLeftText, BsInstagram } from "react-icons/bs";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API } from "../Constant/Constant";
import { AiOutlineStar } from "react-icons/ai";
function Footer() {
  const [checklogin, setChecklogin] = useState(""); // to chech if user is logged in or not
  const [reviewtoast, setReviewtoast] = useState(false); // to show toast message after submitting review
  const [reviewErr, setReviewErr] = useState(false); // to show error message if review is not submitted

  const getuser = () => {
    axios
      .get(`${API}/user_login/check_valid_token`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
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

  // to get profile data of user if logged in
  const [profiledata, setProfiledata] = useState([]);
  const getprofiledata = () => {
    axios
      .get(`${API}/user_profile`)
      .then((res) => {
        // console.log(res.data.user);
        setProfiledata(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getprofiledata();
  }, []);

  // code to submit review to database
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const handlereviewSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/review`, {
        name: profiledata.name,
        email: profiledata.email,
        review: review,
        rating: rating,
      })
      .then((res) => {
        console.log(res);
        setReviewtoast(true);
        notify();
        setTimeout(() => {
          window.location.reload();
        }, [3000]);
      })
      .catch((err) => {
        console.log(err);
        setReviewErr(true);
        notifyErr();
      });
  };

  const notify = () => {
    toast.success("Thanks! for your review..", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifyErr = () => {
    toast.error("Please Enter Review..", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="bg-[#222222]">
      <div className="mainfooter">
        <div className="card">
          <div className="font-bold text-[30px] m-4 text-white">Harshaweb</div>
          <div className="text-[#9FA4AB] text-[14px] m-4 text-justify">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=230&height=230&hl=en&q=pearl best height 1 &t=&z=14&ie=UTF8&iwloc=B&output=embed"
                />
                <a href="https://pdflist.com/" alt="pdflist.com">
                  Pdflist.com
                </a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;width:250px;height:250px;}.gmap_canvas {overflow:hidden;background:none!important;width:250px;height:250px;}.gmap_iframe {width:250px!important;height:250px!important;}",
                }}
              />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="font-semibold text-[23px] m-4 text-white">
            Important Links
          </div>
          <Link to="/app_dev_cal">
            <div className="text-[#9FA4AB] text-[15px]  m-4 text-justify border-b-2 border-[#4C4C4C] hover:border-[#F9BF3A] hover:text-white pb-2 cursor-pointer">
              Calculate App Price
            </div>
          </Link>
          <Link to="/website_price_cal">
            <div className="text-[#9FA4AB] text-[15px]  m-4 text-justify border-b-2 border-[#4C4C4C] hover:border-[#F9BF3A] hover:text-white  pb-2 cursor-pointer">
              Calculate Website Price
            </div>{" "}
          </Link>
          <Link to="/signup">
            <div className="text-[#9FA4AB] text-[15px]  m-4 text-justify border-b-2  border-[#4C4C4C]  hover:border-[#F9BF3A] hover:text-white  pb-2 cursor-pointer">
              Register youself
            </div>{" "}
          </Link>
        </div>
        <div className="card ">
          <div className="font-semibold text-[23px] m-4 text-white">
            Contact Us
          </div>
          <div className="m-4">
            <div className="text-[#9FA4AB] text-[16px]   text-justify">
              We are here to help you. Please contact us if you have any
              questions.
            </div>
            <div className="flex items-center">
              <div className="m-[2px]">
                <GrMail color="#F28422" size={15} />
              </div>
              <a href="mailto:info@harshaweb.com">
                <div className="m-[2px] ">info@harshaweb.com</div>
              </a>
            </div>
            <div className="flex items-center">
              <div className="m-[2px]">
                <SiWhatsapp color="#54E676" size={15} />
              </div>
              <a href="https://api.whatsapp.com/send/?phone=9369390970&text&type=phone_number&app_absent=0">
                <div className="m-[2px]">+91 9369390970</div>
              </a>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=9369390970&text&type=phone_number&app_absent=0">
              <button className="btn btn-sm rounded-none  hover:bg-[#F9BF3A] font-bold text-[12px] mt-4   text-[#222222] p-2 bg-[#F9BF3A]">
                CONTACT US
              </button>
            </a>
          </div>
        </div>
        <div className="card ">
          <div className="font-semibold text-[23px] m-4 text-white">Rating</div>
          {checklogin === true ? (
            <div className="m-4">
              <form method="post">
                <div>
                  <div className="text-[#9FA4AB] text-[14px]  mb-2 flex items-center justify-evenly   border border-white  text-justify">
                    <input
                      type="text"
                      name={review}
                      onChange={(e) => setReview(e.target.value)}
                      className="bg-[#222222] p-4 w-auto  text-[15px] outline-none"
                      placeholder="Write your review.."
                      required
                    />
                    <div>
                      <BsChatLeftText size={25} className="mr-2" />
                    </div>
                  </div>

                  <div className=" mt-4">
                    <div className="flex items-center justify-between">
                      <label for="cars">Choose Stars:</label>

                      <select
                        name={rating}
                        onChange={(e) => setRating(e.target.value)}
                        id="cars"
                        className="bg-[#100f0f] p-2 rounded-sm"
                      >
                        <option>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlereviewSubmit}
                  className="btn btn-sm rounded-none  hover:bg-[#F9BF3A] font-bold text-[12px] mt-4   text-[#222222] p-2 bg-[#F9BF3A]"
                >
                  Rate US
                </button>
              </form>
            </div>
          ) : (
            <div className="m-4">
              <div>
                <div className="text-[#9FA4AB] text-[14px]  mb-2 flex items-center justify-evenly   border border-white  text-justify">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-[#222222] p-4 w-auto  text-[15px] outline-none"
                    placeholder="Write your review.."
                    disabled
                  />
                  <div>
                    <BsChatLeftText size={25} className="mr-2" />
                  </div>
                </div>
                <div>
                  Please login your account to rate us. This will help us to
                  improve our services.
                </div>
              </div>

              <Link to="/login">
                <button className="btn btn-sm rounded-none  hover:bg-[#F9BF3A] font-bold text-[12px] mt-4   text-[#222222] p-2 bg-[#F9BF3A]">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="copyrightdiv ">
        <div className="copyrighttext text-[#848484]  ">
          2021 &copy; Copyright, Harshaweb. All rights reserved.
        </div>
        <div className="socialdiv  ">
          <a href="https://www.instagram.com/harshaweb8576/">
            <div className="px-2 cursor-pointer text-[#848484] text-center justify-center text-[13px] hover:text-[#EC1636]">
              <BsInstagram size={20} />
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089705917825">
            <div className="px-2 cursor-pointer  text-[#848484] text-center justify-center text-[13px] hover:text-[#3C5A9A]">
              <FaFacebookSquare size={22} />
            </div>{" "}
          </a>
          <a href="https://www.linkedin.com/in/harsh-singh-7a89791a9/">
            <div className="px-2 cursor-pointer text-[#848484] text-center justify-center text-[13px] hover:text-[#1A6599]">
              <GrLinkedin size={20} />
            </div>
          </a>

          <a href="https://twitter.com/HarshWeb_">
            <div className="px-2 cursor-pointer text-[#848484] text-center justify-center text-[13px] hover:text-[#2EA1F2]">
              <FaTwitterSquare size={22} />
            </div>
          </a>
        </div>
      </div>
      {reviewtoast ? (
        <>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      ) : null}
      {reviewErr ? (
        <>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      ) : null}
    </div>
  );
}

export default Footer;
