import React from "react";
import Image from "next/image";
import logo from "../assets/logo.jpg";
import { FaRegAddressCard } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-zinc-900">
      <div className=" mx-14 py-6 xl:max-w-6xl xl:mx-auto">
        {/* top footer part */}
        <div className=" border-b-[1px] border-zinc-500 pb-14 text-center lg:flex lg:justify-between lg:text-left">
          <div className="mb-6 lg:w-1/2">
            <div className=" text-2xl font-bold text-white">
              Subscribe our newsletter
            </div>
            <div className=" text-sm text-zinc-500 font-bold ">
              get the latest news other tips
            </div>
          </div>
          <div className=" relative lg:w-1/2">
            <input
              className=" w-full rounded-full h-14 px-6"
              type="email"
              placeholder="Email Address"
            />
            <button className=" absolute top-0 right-[-5px]  h-14 bg-icon-hover rounded-full px-10 text-white">
              Subscribe
            </button>
          </div>
        </div>
        {/* middle footer part */}
        <div className=" text-zinc-500 font-bold text-sm border-b-[1px] grid grid-cols-1 md:gap-10 md:grid-cols-2 md:mt-14 xl:grid-cols-3">
          <div className=" py-14 md:py-0">
            <Image src={logo} width={100} height={100} />
            <p className=" my-3">
              Our Gifall charity At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium
            </p>
            <button className=" px-10 py-4 bg-yellow-300 rounded-3xl">
              join now
            </button>
          </div>
          <div className=" grid grid-cols-1 gap-3 mb-6 md:mb-0 xl:mb-14">
            <p className=" text-white">Address</p>
            <div>
              <p className=" text-white mb-3">Our address</p>
              <div className="">
                <div className=" h-10 w-10 rounded-full text-4xl bg-gray-400 mr-3">
                  <FaRegAddressCard className=" text-white p-2" />
                </div>
                <div>
                  <p>101 Merritt 5, north tower</p>
                  <p>14851 New York, USA</p>
                </div>
              </div>
            </div>
            <div>
              <p className=" text-white hidden">Our address</p>
              <div className="">
                <div className=" h-10 w-10 rounded-full text-4xl bg-gray-400 mr-3">
                  <FaRegAddressCard className=" text-white p-2" />
                </div>
                <div>
                  <p>101 Merritt 5, north tower</p>
                  <p>14851 New York, USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mb-14">
            <h2 className=" text-white pb-2">Explore Link</h2>
            <p>charity</p>
            <p>donation</p>
            <p>fundrising</p>
            <p>Our campaign</p>
            <p>volunteer</p>
            <p>about us</p>
            <p>contact us</p>
          </div>
        </div>

        {/* bottom footer part */}
        <div className=" mt-8 md:text-center lg:flex justify-between items-center">
          <div className=" flex justify-center items-center mb-3">
            <p className=" text-white capitalize mr-6">follow social</p>
            <div className=" h-10 w-10 rounded-full flex justify-center items-center text-4xl bg-gray-400 mr-3">
              <FaRegAddressCard className=" text-white p-2" />
            </div>
            <div className=" h-10 w-10 rounded-full flex justify-center items-center text-4xl bg-gray-400 mr-3">
              <FaRegAddressCard className=" text-white p-2" />
            </div>
            <div className=" h-10 w-10 rounded-full flex justify-center items-center text-4xl bg-gray-400 mr-3">
              <FaRegAddressCard className=" text-white p-2" />
            </div>
            <div className=" h-10 w-10 rounded-full flex justify-center items-center text-4xl bg-gray-400 mr-3">
              <FaRegAddressCard className=" text-white p-2" />
            </div>
          </div>
          <p className=" text-white">©2023 Template_Mr All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
