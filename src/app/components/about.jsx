"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Popup from "/public/Bheki.png";
import { Tooltip } from "@material-tailwind/react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import BG from "/public/ThinkingMan.jpg";

export default function About() {
  return (
    <div className="bg-gray-900 h-full">
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

        <div>
          <div className="py-36 px-18 mx-12">
            <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-white">
              Let your
              <br /> brand tell
              <br /> your story
            </h1>
            <div className="">
              <SpeedDial placement="right">
                <SpeedDialHandler>
                  <IconButton size="lg" className="rounded-full">
                    <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                  </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent className="flex-row">
                  <SpeedDialAction className="p-4 rounded-sm bg-white/10 border-0 text-left">
                    <p>
                      Story telling has always been part of the African way of
                      life and one way of making a memorable impression is
                      through your story. <br />
                      Let us help you and your brand stay top of mind.
                    </p>
                    {/* CTA */}
                    <div className="mt-2 flex items-center justify-center gap-x-6">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white p-3 px-6 border-2 rounded-full duration-500 ease-in-out transform relative overflow-hidden hover:bg-white/15"
                      >
                        Let’s get you started
                      </a>
                    </div>
                  </SpeedDialAction>
                </SpeedDialContent>
              </SpeedDial>
            </div>
            {/* <div class="group relative m-12  justify-center">
              <button class="rounded bg-amber-500 px-4 py-2 text-sm text-white shadow-sm">
                Hover me!
              </button>
              <div class="absolute top-10 scale-0 transition-all rounded bg-gray-800/30 p-2 text-xs text-white group-hover:scale-100">
                Story telling has always been part of the African way of life
                and one way of making a memorable impression is through your
                story. <br />
                Let us help you and your brand stay top of mind.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
