"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Popup from "/public/Bheki.png";
import { Tooltip } from "@material-tailwind/react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import BG from "/public/ThinkingManback.jpg";
import Engage from "/public/engage.png";
import Connect from "/public/connect.png";

export default function Why() {
  return (
    <div className="bg-gray-900" id="stories">
      <div className="relative isolate overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0 -z-10 object-cover h-full w-full">
          <Image
            // width={1000}
            // height={1000}
            fill
            // sizes="100vw"
            src={BG}
            alt="Sculpture of a man"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="py-48 mx-4 sm:mx-32 md:mx-52 lg:mx-60">
          {/* Heading */}
          <h1 className="text-6xl sm:text-9xl font-black tracking-tight text-white capitalize">
            Create
            <br />
            memorable
            <br />
            digital stories
          </h1>
          {/* Heading end */}

          <SpeedDial placement="right" className="">
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
              {/* 1st object */}
              <SpeedDialAction className="w-full sm:max-w-96 max-w-64 tracking-tight text-base bg-white/0 border-0 text-left text-white font-light sm:text-sm hover:scale-105">
                {/* 1st */}
                <p className="">
                  Our methodology is simple yet practical with the aim to help
                  you remain relevant in todays competitive markets.
                </p>

                {/* 2nd */}
                <span className="my-4 w-full max-w-96">
                  One way of doing this is through engaging with your audience
                  and forging stronger connections online.
                </span>

                {/* CTA */}
                <div className="w-full mt-2 flex items-left">
                  <a
                    href="#offer"
                    className="text-sm font-base leading-6 text-white p-2 px-5 border-2 rounded-full duration-500 ease-in-out transform overflow-hidden hover:bg-white/95 hover:text-gray-900 hover:shadow-xl"
                  >
                    I like this, let’s do It
                  </a>
                </div>
              </SpeedDialAction>

              {/* 2nd object */}
              <Link href={"#"} className="">
                <SpeedDialAction className="sm:h-16 h-5 sm:w-16 w-5 bg-transparent">
                  <Image
                    src={Engage}
                    alt=""
                    width={200}
                    height={200}
                    className="h-5 w-5"
                  />
                  <Typography
                    color=""
                    className="text-xs font-normal text-white"
                  >
                    Engage
                  </Typography>
                </SpeedDialAction>
              </Link>

              {/* 3rd object */}
              <Link href={"#"}>
                <SpeedDialAction className="sm:h-16 h-5 sm:w-16 w-5 bg-transparent">
                  <Image
                    src={Connect}
                    alt=""
                    width={200}
                    height={200}
                    className="h-5 w-5"
                  />
                  <Typography
                    color=""
                    className="text-xs font-normal text-white"
                  >
                    Connect
                  </Typography>
                </SpeedDialAction>
              </Link>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    </div>
  );
}
