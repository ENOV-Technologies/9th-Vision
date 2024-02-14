"use client";
import React from "react";
import Image from "next/image";
import Popup from "/public/Bheki.png";
import BG from "/public/Main.jpg";

export default function Clients() {
  return (
    <div className="h-full bg-blue-gray-600">
      <div className="overflow-hidden  py-24 sm:py-32 relative isolate">
        {/* Image */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            // width={1000}
            // height={1000}
            fill
            // sizes="100vw"
            src={BG}
            alt="Stars"
            className="h-full w-full object-cover antialiased"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Content */}
            <div className="lg:pr-4 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* Left Content */}
                <div className="flex flex-col items-center justify-center text-white pb-20">
                  <Image
                    src={Popup}
                    width={600}
                    height={600}
                    alt=""
                    className="rounded-full h-32 w-32 object-cover border-2 border-spacing-16 mb-4 p-3"
                  />
                  <h2 className="font-normal">Bhekisipho Maphosa</h2>
                  <h3 className="font-light">
                    Creative Brand & Digital Marketer
                  </h3>
                </div>

                {/* 1st */}
                <p className="w-full  tracking-tight text-sm border-0 text-left text-white font-light sm:text-base">
                  Glad to be of acquaintance. What better way to start off your
                  day with new{" "}
                  <span className="font-normal">
                    resolutions, energy, ambition
                  </span>{" "}
                  and of course, helping your business reach its marketing
                  objectives and making your brand the rockstar of the show.
                </p>

                {/* 2nd */}
                <p className="w-full sm:max-w-96 max-w-64 tracking-tight py-8 text-sm border-0 text-left text-white font-light sm:text-base">
                  Below is a once-off offer to launch you onto the marketing
                  stage with a bang.
                </p>

                {/* CTA */}
                <div className="w-full flex items-left">
                  <a
                    href="#"
                    className="text-sm font-light leading-6 text-white p-2 px-6 border-2 rounded-full duration-500 ease-in-out transform overflow-hidden hover:bg-white/95 hover:text-gray-900 hover:shadow-xl hover:shadow-gray-900/30"
                  >
                    Grab my offer now
                  </a>
                </div>
                {/* Heading end */}
              </div>
            </div>

            {/* Right Content */}
            <div className="container">
              <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-white capitalize">
                Reach your
                <br /> marketing
                <br /> goals and get
                <br />
                real return
                <br />
                on investment
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
