"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Pizza from "/public/Pizza.png";

export default function Contact() {
  return (
    <div className="h-full" style={{ backgroundColor: "#480AEE" }}>
      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Content */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="">
                {/* Heading */}
                <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-white capitalize">
                  Get it
                  <br />
                  while its hot!
                </h1>
                {/* CTA */}
                <div className="w-full mt-2 flex items-left">
                  <Image src={Pizza} width={600} height={600} alt="relative" />
                </div>
                {/* Heading end */}
              </div>
            </div>

            {/* Form */}
            <div className="container mx-auto px-2 sm:py-16 py-4 ">
              <div>
                <form class="max-w-sm mx-auto border p-8 rounded-3xl border-white">
                  <div className="text-center text-white font-light">
                    <h2 className="text-xl tracking-tight">
                      Here is a kickstart 5% off your next project with us.
                    </h2>
                    <p className="text-sm tracking-tight">
                      Did I mention no strings attached?
                      <br />
                      Drop us a mail and tell a friend.
                    </p>
                    <p className="text-xs tracking-tight py-2">
                      *We do serve hot offers!
                    </p>
                  </div>
                  <div class="mb-5">
                    <input
                      type="text"
                      id="name"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-gray-50  dark:placeholder-gray-400 font-light focus:shadow-2xl focus:scale-105 transition duration-500 ease-in-out transform"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="mb-5">
                    <input
                      type="email"
                      id="Email"
                      placeholder="Email"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-gray-50  dark:placeholder-gray-400 font-light focus:shadow-2xl focus:scale-105 transition duration-500 ease-in-out transform"
                      required
                    />
                  </div>

                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-gray-50  dark:placeholder-gray-400 font-light focus:shadow-2xl focus:scale-105 transition duration-500 ease-in-out transform"
                    placeholder="Leave a comment..."
                  ></textarea>

                  <button
                    type="submit"
                    className="my-4 text-sm font-light leading-6 text-white p-2 px-6 border-2 rounded-full duration-500 ease-in-out transform overflow-hidden hover:bg-white/95 hover:text-gray-900 hover:shadow-xl hover:shadow-gray-900/30"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
