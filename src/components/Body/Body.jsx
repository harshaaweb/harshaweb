import { motion } from "framer-motion";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import Advertise from "./Advertise";
import Client_Slider from "./Client_Slider";
import Counting_Number from "./Counting_Number";
import LatestNews from "./LatestNews";
import MidContent from "./MidContent";
import OurProjects from "./OurProjects";
import Slider from "./Slider";
import Top_Content from "./Top_Content";

function Body() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.9, stiffness: 500 }}
      >
        <Top_Content />
        {/* <Slider /> */}
        <MidContent />
        <Counting_Number />
        <OurProjects />
        <Advertise />
        <Client_Slider />
        <LatestNews />
        <Footer />
      </motion.div>
    </div>
  );
}

export default Body;
