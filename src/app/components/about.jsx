"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import BG from "/public/ThinkingMan.jpg";

export default function About() {
  return (
    <div className="bg-gray-900 h-full" id="about">
      <div className="relative isolate overflow-hidden">
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

        <div className="py-48 px-18 mx-10">
          {/* Heading */}
          <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-white capitalize">
            Let your
            <br /> brand tell
            <br /> your story
          </h1>
          {/* Heading end */}

          {/* Content */}
          <div className="">
            <SpeedDial placement="right">
              {/* Plus icon */}
              <SpeedDialHandler>
                <IconButton
                  size="lg"
                  className="rounded-full bg-transparent my-5"
                >
                  <PlusIcon className="h-10 w-10 border-2 rounded-full transition-transform group-hover:rotate-45 border-white animate-bounce hover:animate-none" />
                </IconButton>
              </SpeedDialHandler>

              {/* Hidden Content */}
              <SpeedDialContent className="flex-row my-20">
                <SpeedDialAction className="w-full sm:max-w-96 max-w-64 tracking-tight text-base bg-white/0 border-0 text-left text-white font-light sm:text-sm hover:scale-105">
                  {/* 1st */}
                  <p className="">
                    Story telling has always been part of the African way of
                    life and one way of making a memorable impression is through
                    your story.
                  </p>

                  {/* 2nd */}
                  <span className="my-4 w-full max-w-96">
                    Let us help you and your brand stay top of mind.
                  </span>

                  {/* CTA */}
                  <div className="w-full mt-2 flex items-left">
                    <a
                      href="#offer"
                      className="text-sm font-base leading-6 text-white p-2 px-6 border-2 rounded-full duration-500 ease-in-out transform overflow-hidden hover:bg-white/15"
                    >
                      Get in touch
                    </a>
                  </div>
                </SpeedDialAction>
              </SpeedDialContent>
            </SpeedDial>
          </div>
        </div>
      </div>
    </div>
  );
}
