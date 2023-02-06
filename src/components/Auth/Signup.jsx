import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../Constant/Constant";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [errortoastify, setErrortoastify] = useState(false); // for toastify error message
  const [successsignup, setSuccesssignup] = useState(false); // for toastify success message

  const notifysuccess = () => {
    toast.success("Signup success", {
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

  const handlesignup = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/new_user_register`, {
        name: name,
        username: username,
        phone: phone,
        address: address,
        email: email,
        password: password,
        age: age,
      })
      .then((res) => {
        console.log(res.data);
        setSuccesssignup(true);
        notifysuccess();
        setTimeout(() => {
          window.location.href = "/login";
        }, [1500]);
      })
      .catch((err) => {
        // console.log(err);
        // console.log(err.response.data.message);
        setErrortoastify(true);
        notifyerror(err.response.data.message);
      });
  };

  return (
    <div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.9, stiffness: 500 }}
        className="flex bg-[#f1f1f1]  items-center h-screen w-full"
      >
        <div className="w-full bg-white md:mt-0 mt-12 rounded shadow-lg p-8 m-4 md:max-w-[600px] md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Signup
          </span>
          <form className="mb-4">
            <div className="md:flex block items-center">
              <div className="m-2 md:w-full">
                <label htmlFor="Name" className="block text-m mb-1">
                  Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="Name"
                  id="Name"
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className="m-2 md:w-full">
                <label htmlFor="Username" className="block text-m mb-1">
                  Username
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="Username"
                  placeholder="Username"
                  name={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex block items-center">
              <div className="m-2 md:w-full">
                <label htmlFor="Phone" className="block text-m mb-1">
                  Phone
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="number"
                  id="Phone"
                  name={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div className="m-2 md:w-full">
                <label htmlFor="Address" className="block text-m mb-1">
                  Address
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="Address"
                  name={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="md:flex block items-center">
              <div className="m-2 md:w-full">
                <label htmlFor="email" className="block text-m mb-1">
                  Email
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  name={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="m-2 md:w-full">
                <label htmlFor="password" className="block text-m mb-1">
                  Password
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="md:flex block items-center">
              <div className="m-2 md:w-full">
                <label htmlFor="Age" className="block text-m mb-1">
                  Age
                </label>
                <input
                  className="md:w-1/2 w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="number"
                  name={age}
                  onChange={(e) => setAge(e.target.value)}
                  id="Age"
                  placeholder="Age"
                />
              </div>
            </div>
            <div className="m-2 pt-4">
              <button
                onClick={handlesignup}
                className="btn btn-sm rounded-none bg-[#01061d]"
              >
                Signup
              </button>
            </div>
          </form>
          {/* <a className="text-blue-700 text-center text-sm">Forgot password?</a> */}
          <div className="text-center font-semibold text-[20px]">or</div>
          <div className="mt-4 text-center text-[17px]  ">
            If you already have an Account ?
          </div>
          <div className="mt-2 text-center ">
            Click here to{" "}
            <Link to="/login">
              {" "}
              <span className="underline underline-offset-2 ">Login</span>
            </Link>
          </div>
        </div>
      </motion.div>
      {successsignup ? (
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

export default Signup;
