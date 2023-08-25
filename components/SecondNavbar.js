import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SecondNavbar() {
  return (
    <div className=" bg-white h-28 hidden  min-[1080px]:flex shadow-xl">
      <div className="flex justify-between items-center h-28 mx-auto text-md capitalize px-10 w-[1080px]">
        <div className=" flex gap-8">
          <div className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer">
            Home
          </div>
          <div className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer">
            About
          </div>
          <div className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer">
            donation
          </div>
          <div className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer">
            events
          </div>
          <div className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer">
            pages
          </div>
          <div className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer">
            blogs
          </div>
          <div className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer">
            contact
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <p className=" hover:text-icon-hover  duration-300 delay-75 cursor-pointer normal-case">
            Join us now
          </p>
          <button className=" bg-yellow-300 text-black uppercase text-sm font-bold px-6 py-2 hover:bg-icon-hover hover:text-white duration-300 delay-75">
            become a volunteer
          </button>

          <div className=" bg-icon-bg h-14 w-14 rounded-full flex justify-center items-center font-bold text-4xl cursor-pointer text-black hover:text-white hover:bg-black duration-300 delay-75">
            <FaSearch className=" h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
