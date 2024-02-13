"use client";
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
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/workshop.png";
import Behance from "/public/behance.png";
import Facebook from "/public/facebook.svg";
import Instagram from "/public/instagram.png";
import Linkedin from "/public/linkedin.png";

export default function DefaultSpeedDial() {
  return (
    <div className="">
      <div className="fixed top-20 right-5">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            width={500}
            height={500}
            className="my-2 h-12 w-12"
            src={Logo}
            alt="Logo"
          />
        </Link>

        {/* Socials */}
        <SpeedDial>
          {/* Initial Icon */}
          {/* <SpeedDialHandler>
            <IconButton
              color="white"
              size="lg"
              className="h-8 w-8 rounded-full border border-blue-gray-50 shadow-xl"
            >
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler> */}
          {/* Initial Icon end */}

          {/* <SpeedDialContent className="rounded-full border border-blue-gray-50/5 bg-white/5 shadow-xl shadow-black/10"> */}

          {/* Facebook */}
          <Link
            href={"#"}
            className="border-2 border-white rounded-full flex p-1 m-3 hover:scale-110 duration-500 ease-in-out transform"
          >
            <Image
              width={500}
              height={500}
              className="h-4 w-4"
              src={Facebook}
              alt="Logo"
            />
          </Link>

          {/* Behance */}
          <Link
            href={"#"}
            className="border-2 border-white rounded-full flex p-1 m-3 hover:scale-110 duration-500 ease-in-out transform"
          >
            <Image
              width={500}
              height={500}
              className="h-4 w-4"
              src={Behance}
              alt="Logo"
            />
          </Link>

          {/* Linkedin */}
          <Link
            href={"#"}
            className="border-2 border-white rounded-full flex p-1 m-3 hover:scale-110 duration-500 ease-in-out transform"
          >
            <Image
              width={500}
              height={500}
              className="h-4 w-4"
              src={Linkedin}
              alt="Logo"
            />
          </Link>

          {/* Instagram */}
          <Link
            href={"#"}
            className="border-2 border-white rounded-full flex p-1 m-3 hover:scale-110 duration-300 ease-in-out transform"
          >
            <Image
              width={500}
              height={500}
              className="h-4 w-4"
              src={Instagram}
              alt="Logo"
            />
          </Link>

          {/* </SpeedDialContent> */}
        </SpeedDial>
      </div>
    </div>
  );
}
