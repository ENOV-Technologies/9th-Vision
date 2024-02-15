"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Popup from "/public/Bheki.png";
import { Tooltip } from "@material-tailwind/react";
import BG from "/public/Main.jpg";

export default function Landing() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden h-screen w-screen">
        {/* Image */}
        <div className="absolute inset-0 -z-10 ">
          <Image
            // width={1000}
            // height={1000}
            fill
            // sizes="100vw"
            src={BG}
            alt="Stars"
            className="object-cover antialiased"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-2xl py-20 sm:py-38 lg:py-30">
          <div className="text-center antialiased">
            {/* one */}
            <h1
              className="text-7xl font-black tracking-tight text-white sm:text-8xl uppercase"
              style={{ fontFamily: "poppins", fontWeight: "900" }}
            >
              Stay <br /> ahead
            </h1>
            {/* one end */}

            {/* two */}
            <h2
              className="relative flex py-5 items-center uppercase text-4xl font-black tracking-tight text-white sm:text-5xl"
              style={{ fontFamily: "poppins", fontWeight: "900" }}
            >
              <div class="flex-grow border-t-8 border-gray-50" />
              <span class="flex-shrink mx-4 text-white">of the</span>
              <div class="border-t-8 border-gray-50 flex-grow" />
            </h2>
            {/* two end */}

            {/* three */}
            <h1
              className="text-6xl font-bold tracking-tight text-white sm:text-8xl uppercase"
              style={{ fontFamily: "poppins", fontWeight: "900" }}
            >
              competition
            </h1>
            {/* three end */}

            {/* four */}
            <div className="py-8">
              {/* <div className="relative flex items-center capitalise font-bold tracking-tight text-white text-base">
                <div class="border-t border-gray-50 border-x-8 px-6 grow" />
                <span class="flex-shrink mx-4 text-white text-base font-light text-center">
                  Welcome to Ninth Vision
                </span>
                <div class="border-t border-gray-50 border-x-8 px-6 grow" />
              </div> */}
              <p className=" text-base leading-8 text-white font-normal">
                Welcome to Ninth Vision <br />
              </p>
              <p className=" text-lg leading-8 text-white font-light">
                Is your company ready to weather the recession?
              </p>
            </div>
            {/* four end */}

            {/* CTA */}
            <div className="mt-2 flex items-center justify-center gap-x-6">
              <a
                href="#dm"
                className="text-sm font-semibold leading-6 text-white p-3 px-6 border-2 rounded-full duration-500 ease-in-out transform relative overflow-hidden hover:bg-white/15"
              >
                Let’s get you started
              </a>
            </div>
            {/* Tooltip */}
            {/* <div className="z-40 border-2 sm:m-3 m-0 py-2 rounded-full">
              <Tooltip
                placement="top"
                content="Hi, and welcome
            to Ninth Vision.
            How can I be of
            assistance?"
                color="gray"
                className="bg-gray-900/80 p-2 px-4 font-light w-full pb-4 text-sm max-w-52"
                size="regular"
              >
                <div className="text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  <Image
                    src={Popup}
                    width={600}
                    height={600}
                    alt=""
                    className="rounded-full h-12 w-12 sm:h-16 sm:w-16 object-cover animate-pulse"
                  />
                </div>
              </Tooltip>
            </div> */}
          </div>
        </div>

        {/* Tooltip */}
        <div className="z-40 absolute sm:right-8 sm:bottom-5 bottom-1 right-2 border-2 sm:m-3 m-0 py-2 rounded-full">
          <Tooltip
            placement="top"
            content="Hi, and welcome
            to Ninth Vision.
            How can I be of
            assistance?"
            color="gray"
            className="bg-gray-900/80 p-2 px-4 font-light w-full pb-4 text-sm max-w-52"
            size="regular"
          >
            <div className="text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <Image
                src={Popup}
                width={600}
                height={600}
                alt=""
                className="rounded-full h-12 w-12 sm:h-16 sm:w-16 object-cover animate-pulse"
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
