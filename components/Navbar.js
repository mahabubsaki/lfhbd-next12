import React, { useState } from "react";
import {
  FaRegAddressCard,
  FaRegEnvelope,
  FaPhoneAlt,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/logo.jpg";
import PrimaryDrawer from "./PrimaryDrawer";

export default function Navbar({ refs }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="" ref={refs}>
      <header className=" bg-white h-28 ">
        <div className=" flex justify-between items-center h-28 mx-auto px-6 max-w-[1800px] min-[1920px]:mx-auto">
          {/* //first navbar */}
          <div className=" cursor-pointer">
            <Image width={120} height={120} src={logo} alt="Logo" />
          </div>
          <div className=" hidden justify-around min-w-[80%] items-center gap-4 min-[1080px]:flex">
            <div className=" flex justify-center items-center gap-4">
              <div className=" bg-icon-bg h-14 w-14 rounded-full flex justify-center items-center font-bold text-4xl">
                <FaRegAddressCard className=" h-6 w-6" />
              </div>
              <div>
                <p>The Strand, 14 sector Australia</p>
                <p className=" font-bold">Melbourne, Australia</p>
              </div>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <div className=" bg-icon-bg h-14 w-14 rounded-full flex justify-center items-center font-bold text-4xl">
                <FaRegEnvelope className=" h-6 w-6" />
              </div>
              <div>
                <p>You may send an email</p>
                <p className=" font-bold">helpus24@gmail.com</p>
              </div>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <div className=" bg-icon-bg h-14 w-14 rounded-full flex justify-center items-center font-bold text-4xl">
                <FaPhoneAlt className="h-6 w-6" />
              </div>
              <div>
                <p>Helpline and support</p>
                <p className=" font-bold">88 57 00 24 51</p>
              </div>
            </div>
            <div className=" flex justify-center items-center gap-4 border-2 border-black px-10 py-4 sm:hidden 2xl:flex">
              <p className=" text-xl">You can make a difference today!</p>
              <button className=" text-md bg-yellow-300 px-8 py-1 hover:bg-icon-hover hover:text-white duration-300 delay-75">
                Donation
              </button>
            </div>
          </div>
          {/* //Hamburger */}
          <FaBars
            onClick={() => setOpen(true)}
            className=" block text-3xl cursor-pointer hover:text-icon-hover duration-300 delay-75 min-[1080px]:hidden"
          />
        </div>
        <PrimaryDrawer open={open} setOpen={setOpen} />

        {/* second navbar */}
        <div className=" hidden justify-between items-center px-10 py-3 rounded mt-[-10px] bg-icon-hover mx-auto text-md text-white capitalize w-[1080px] z-40 relative min-[1080px]:flex ">
          <div className=" flex gap-8">
            <div className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer">
              Home
            </div>
            <div className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer">
              About
            </div>
            <div className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer">
              donation
            </div>
            <div className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer">
              events
            </div>
            <div className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer">
              pages
            </div>
            <div className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer">
              blogs
            </div>
            <div className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer">
              contact
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <p className=" hover:text-yellow-300  duration-300 delay-75 cursor-pointer normal-case">
              Join us now
            </p>
            <button className=" bg-yellow-300 text-black uppercase text-sm font-bold px-6 py-2 hover:bg-white duration-300 delay-75">
              become a volunteer
            </button>

            <div className=" bg-icon-bg h-14 w-14 rounded-full flex justify-center items-center font-bold text-4xl cursor-pointer text-black hover:text-white hover:bg-black duration-300 delay-75">
              <FaSearch className=" h-6 w-6" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
