import React from "react";
import { Link } from "react-router";
import { TbBrandGithub } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";

const Home = ({ darkMode }) => {
  return (
    <div
      className={`font-imperial flex flex-col gap-17 text-center items-center pt-11 pb-6 h-[100vh] ${
        darkMode ? "darkmode" : "lightmode"
      }`}
    >
      <span
        className=" text-8xl font-[500] text-left"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Hey! It's
      </span>
      <span className="text-7xl " data-aos="zoom-in" data-aos-duration="1500">
        Sanjila Gangaju
      </span>
      <div className="font-sans flex items-center gap-4 text-center font-[700]  mt-2 text-[0.8rem]">
        <span className="w-16">
          <hr></hr>
        </span>
        <span className="text-2xl"> Frontend Developer in the Making</span>
        <span className="w-16">
          <hr></hr>
        </span>
      </div>
      <div className="flex gap-8 w-full items-center justify-center cursor-pointer">
        <button className="bg-redwood rounded px-3 hover:bg-red-900 text-center">
          <Link to="/about" className="text-3xl text-white font-saint ">
            more about me
          </Link>
        </button>
        <button className="flex items-center justify-center bg-redwood text-white cursor-pointer hover:bg-red-900 font-saint rounded px-3 text-3xl text-center">
          <MdOutlineFileDownload></MdOutlineFileDownload>resume
        </button>
        <div className="flex gap-10">
          <Link to="https://github.com/SanjilaGangaju">
            <TbBrandGithub className="hover:text-red-900 cursor-pointer" />
          </Link>
          <GrLinkedinOption className="hover:text-red-900 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Home;
