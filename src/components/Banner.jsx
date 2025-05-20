import React from "react";
import bannerImg from "/images/home/banner.png";
import { useTheme } from "../hooks/ThemeContext";

const Banner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`max-w-screen-2xl  container mx-auto xl:px-24  ${isDarkMode ? 'dark' : ''}`}>
      <div className={`py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8 ${isDarkMode ? 'text-white' : ''}`}>

        {/* img */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
         
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable <span className="text-green">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
