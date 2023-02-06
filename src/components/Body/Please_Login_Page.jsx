import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import p_login from "../assets/images/pleaselogin.jpg";

function Please_Login_Page() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.9, stiffness: 500 }}
      className="md:w-90% w-full md:p-24 p-4 md:mt-8  md:mb-4 mb-24 mt-32"
    >
      <div className="md:w-[500px]  w-[300px] m-auto ">
        <img src={p_login} alt="" className="w-full" />
        <div className="text-center text-[20px]">
          Please{" "}
          <Link to="/login">
            {" "}
            <span className="font-bold underline"> Login</span>
          </Link>{" "}
          to access this page
        </div>
      </div>
    </motion.div>
  );
}

export default Please_Login_Page;
