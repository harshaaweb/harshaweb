import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Constant/Constant";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errortoastify, setErrortoastify] = useState(false); // for toastify error message
  const [successlogin, setSuccesslogin] = useState(false); // for toastify success message

  const notifysuccess = () => {
    toast.success("Login success", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifyerror = (props) => {
    toast.error(props, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API}/user_login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setSuccesslogin(true);
        notifysuccess();
        setTimeout(() => {
          window.location.href = "/";
        }, [1500]);
      })
      .catch((err) => {
        console.log(err);
        setErrortoastify(true);
        notifyerror(err.response.data.msg);
      });
  };

  return (
    <div>
      <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.9, stiffness: 500 }} className="flex bg-[#f1f1f1] items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-m mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-m mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn btn-sm rounded-none bg-[#01061d]"
            >
              Login
            </button>
          </form>
          {/* <a className="text-blue-700 text-center text-sm">Forgot password?</a> */}
          <div className="text-center font-semibold text-[20px]">or</div>
          <div className="mt-4 text-center text-[17px]  ">
           Hey!  Don't Have Account ?
          </div>
          <div className="mt-2 text-center ">
            Click here to{" "}
            <Link to="/signup">
              {" "}
              <span className="underline underline-offset-2 "> Signup</span>
            </Link>
          </div>
        </div>
      </motion.div>
      {successlogin ? (
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      ) : null}
      {errortoastify ? (
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      ) : null}
    </div>
  );
}

export default Login;
