import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Constant/Constant";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { motion } from "framer-motion";
import "../assets/css/profilepage.css";
import { FiEdit } from "react-icons/fi";
import Please_Login_Page from "./Please_Login_Page";
import { ToastContainer, toast } from "react-toastify";
function Profile() {
  const [checklogin, setChecklogin] = useState("");
  const [editPopupModal, setEditPopupModal] = useState(false); // for edit popup modal
  const [profileUpdateToastify, setProfileUpdateToastify] = useState(false); // for profile update toastify
  const profileupdateNotify = () => {
    toast.success("Profile updated 👍 ", {
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

  // code to get data from user profile
  const [userdata, setUserdata] = useState({});

  const getuserprofile = () => {
    axios
      .get(`${API}/user_profile`)
      .then((res) => {
        console.log(res.data.user);
        setUserdata(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getuserprofile();
  }, []);

  // code to logout user
  const Handlelogout = () => {
    axios
      .get(`${API}/user_logout`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // code to update user profile data
  const handleUpdate = () => {
    axios
      .patch(`${API}/new_user_register/updateuser/${userdata._id}`, {
        name: userdata.name,
        email: userdata.email,
        phone: userdata.phone,
        address: userdata.address,
        age: userdata.age,
        username: userdata.username,
      })
      .then((res) => {
        console.log(res.data);
        setProfileUpdateToastify(true);
        profileupdateNotify();
        setTimeout(() => {
          window.location.href = "/profilepage";
        }, 3500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" ">
      <div>
        <Navbar />
      </div>
      {checklogin === true ? (
        <>
          <div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.9, stiffness: 500 }}
              className="mt-[70px]  bg-[#f6f6f6] md:p-12 p-4 md:pb-24"
            >
              <div className="md:w-[500px]   m-auto rounded-sm shadow-sm bg-[#fff]  ">
                <div className="mainback   p-4 text-center rounded-sm">
                  <span className="font-bold  text-[20px] text-white  ">
                    Hi👋,&nbsp;
                    <span className="underline">{userdata.username}</span>
                  </span>
                </div>
                <div className="p-4 flex border-b-[1px] shadow-none items-center justify-between  rounded-none">
                  <div>Information</div>
                  <div className="w-[50%]  flex items-center justify-end">
                    <button
                      class="btn btn-square btn-sm rounded-sm mr-4"
                      onClick={() => setEditPopupModal(!editPopupModal)}
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      className="btn btn-sm rounded-sm"
                      onClick={Handlelogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <div className="carddiv p-4   items-center justify-between ">
                  <div className="md:w-[50%] w-full  ">
                    <div className="font-semibold">Name</div>
                    <div className="mt-2">{userdata.name} </div>
                  </div>
                  <div className="md:w-[50%] w-full  ">
                    <div className="font-semibold">Email</div>
                    <div className="mt-2">{userdata.email} </div>
                  </div>
                </div>
                <div className="carddiv p-4   items-center justify-between  ">
                  <div className="md:w-[50%] w-full  ">
                    <div className="font-semibold">Phone</div>
                    <div className="mt-2">{userdata.phone} </div>
                  </div>
                  <div className="md:w-[50%] w-full  ">
                    <div className="font-semibold">Address</div>
                    <div className="mt-2">{userdata.address} </div>
                  </div>
                </div>
                <div className="carddiv p-4   items-center justify-between  ">
                  <div className="md:w-[50%] w-full  ">
                    <div className="font-semibold">Age</div>
                    <div className="mt-2">{userdata.age} </div>
                  </div>
                  <div className="md:w-[50%] w-full  ">
                    <div className="font-semibold">Username</div>
                    <div className="mt-2">{userdata.username} </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {editPopupModal ? (
              <>
                <div className="justify-center p-4 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative  my-6 mx-auto md:w-[500px] w-full">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Edit Profile</h3>
                        <button
                          className="btn btn-square btn-sm rounded-sm"
                          onClick={() => setEditPopupModal(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-4   flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          You can edit your profile here .
                        </p>
                        <div className="md:flex item  justify-around">
                          <div className="md:w-[45%] w-full md:mt-6 mt-4">
                            <div>Name</div>
                            <div>
                              <input
                                type="text"
                                value={userdata.name}
                                onChange={(e) =>
                                  setUserdata({
                                    ...userdata,
                                    name: e.target.value,
                                  })
                                }
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                          </div>
                          <div className="md:w-[45%] w-full md:mt-6 mt-4">
                            <div>Email</div>
                            <div>
                              <input
                                type="text"
                                value={userdata.email}
                                onChange={(e) =>
                                  setUserdata({
                                    ...userdata,
                                    email: e.target.value,
                                  })
                                }
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="md:flex item  justify-around">
                          <div className="md:w-[45%] w-full md:mt-6 mt-4">
                            <div>Address</div>
                            <div>
                              <input
                                type="text"
                                value={userdata.address}
                                onChange={(e) =>
                                  setUserdata({
                                    ...userdata,
                                    address: e.target.value,
                                  })
                                }
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                          </div>
                          <div className="md:w-[45%] w-full md:mt-6 mt-4">
                            <div>Phone</div>
                            <div>
                              <input
                                type="text"
                                value={userdata.phone}
                                onChange={(e) =>
                                  setUserdata({
                                    ...userdata,
                                    phone: e.target.value,
                                  })
                                }
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="md:flex item  justify-around">
                          <div className="md:w-[45%] w-full md:mt-6 mt-4">
                            <div>Age</div>
                            <div>
                              <input
                                type="text"
                                value={userdata.age}
                                onChange={(e) =>
                                  setUserdata({
                                    ...userdata,
                                    age: e.target.value,
                                  })
                                }
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                          </div>
                          <div className="md:w-[45%] w-full md:mt-6 mt-4">
                            <div>Username</div>
                            <div>
                              <input
                                type="text"
                                value={userdata.username}
                                onChange={(e) =>
                                  setUserdata({
                                    ...userdata,
                                    username: e.target.value,
                                  })
                                }
                                className="input input-bordered w-full max-w-xs"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent border border-white hover:border-red-700 font-bold uppercase px-6 py-2 text-sm outline-none rounded-sm focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setEditPopupModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => handleUpdate()}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            {profileUpdateToastify ? (
              <>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
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
        </>
      ) : (
        <>
          <Please_Login_Page />
        </>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
