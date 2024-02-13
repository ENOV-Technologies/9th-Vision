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
          <Link href={"#"}>
            <SpeedDialAction className="font-light hover:font-bold bg-gray-50/0 border-2 text-gray-900 my-2">
              <Image
                width={500}
                height={500}
                className="my-2 h-5 w-5"
                src={Facebook}
                alt="Logo"
              />
            </SpeedDialAction>
          </Link>

          {/* Behance */}
          <Link href={"#"}>
            <SpeedDialAction className="font-light hover:font-bold bg-gray-50/0 border-2 text-gray-900 my-2">
              <Image
                width={500}
                height={500}
                className="my-2 h-5 w-5"
                src={Behance}
                alt="Logo"
              />
            </SpeedDialAction>
          </Link>

          {/* Linkedin */}
          <Link href={"#"}>
            <SpeedDialAction className="font-light hover:font-bold bg-gray-50/0 border-2 text-gray-900 my-2">
              <Image
                width={500}
                height={500}
                className="my-2 h-5 w-5"
                src={Linkedin}
                alt="Logo"
              />
            </SpeedDialAction>
          </Link>

          {/* Instagram */}
          <Link href={"#"}>
            <SpeedDialAction className="font-light hover:font-bold bg-gray-50/0 border-2 text-gray-900 my-2">
              <Image
                width={500}
                height={500}
                className="my-2 h-5 w-5"
                src={Instagram}
                alt="Logo"
              />
            </SpeedDialAction>
          </Link>

          {/* </SpeedDialContent> */}
        </SpeedDial>
      </div>
    </div>
  );
}
