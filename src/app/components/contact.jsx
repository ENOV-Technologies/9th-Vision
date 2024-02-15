"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Pizza from "/public/Pizza.png";
import Link from "next/link";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [isVerified, setVerified] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    // Check if reCAPTCHA is verified before submitting the form
    if (!isVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    const templateParams = {
      name: data.name,
      email: data?.email,
      message: data?.message,
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_qommx24",
        "template_e3yeusc",
        templateParams,
        "YcoiS23pTIOyQC_Pe"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Hoooray, message sent successfully");
          event.target.reset();

          // Disappear in 3 secs
          // setTimeout(() => {
          //   setTimeOut(1)
          // }, 3000)
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="h-full" style={{ backgroundColor: "#480AEE" }} id="offer">
      <div className="py-24 sm:py-20">
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
                <div className="w-full mt-2 flex items-left relative">
                  <Image src={Pizza} width={600} height={600} alt="" />
                  {/* Content */}
                  <div className="absolute sm:left-64 sm:bottom-40 left-40 bottom-20">
                    <SpeedDial>
                      {/* Plus icon */}
                      <SpeedDialHandler>
                        <IconButton
                          size="lg"
                          className="rounded-full bg-transparent my-4"
                        >
                          <PlusIcon className="h-10 w-10 border-2 rounded-full transition-transform group-hover:rotate-45 border-white animate-bounce hover:animate-none" />
                        </IconButton>
                      </SpeedDialHandler>

                      {/* Hidden Content */}
                      <SpeedDialContent className="flex-row m-auto sm:mx-52 mx-0">
                        <SpeedDialAction className="rounded-3xl p-4 w-full sm:max-w-96 max-w-64 tracking-tight text-sm border-0 text-left text-white font-light sm:text-base hover:scale-105 bg-black/80">
                          {/* 1st */}
                          <p className="w-full max-w-96 pb-4 text-sm">
                            Did you know pizza is a 37 billion dollar industry?
                            Wow that’s a lot of money!
                          </p>

                          {/* 2nd */}
                          <span className="w-full max-w-96 text-sm">
                            Please take time to tell us how we can add value and
                            help you get a slice of the market share.
                          </span>

                          {/* CTA */}
                          <div className="w-full mt-2 flex items-left">
                            <a
                              href="#"
                              className="text-sm font-base leading-6 text-white p-2 px-6 border-2 rounded-full duration-500 ease-in-out transform overflow-hidden hover:bg-white/15"
                            >
                              Grab a slice
                            </a>
                          </div>
                        </SpeedDialAction>
                      </SpeedDialContent>
                    </SpeedDial>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="container mx-auto px-2 sm:py-16 py-4 ">
              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  class="max-w-sm mx-auto border p-8 rounded-3xl border-white"
                >
                  {/* Form Intro */}
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
                  {/* Form Intro end */}

                  <div class="mb-5">
                    <input
                      type="text"
                      id="name"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-gray-50  dark:placeholder-gray-400 font-light focus:shadow-2xl focus:scale-105 transition duration-500 ease-in-out transform"
                      placeholder="Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div class="mb-5">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-gray-50  dark:placeholder-gray-400 font-light focus:shadow-2xl focus:scale-105 transition duration-500 ease-in-out transform"
                      {...register("email", { required: true })}
                    />
                  </div>

                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-gray-50  dark:placeholder-gray-400 font-light focus:shadow-2xl focus:scale-105 transition duration-500 ease-in-out transform"
                    placeholder="We got you, drop us a mail..."
                  />
                  {/* Add reCAPTCHA component */}
                  <ReCAPTCHA
                    sitekey={"6LdMb3QpAAAAAHC5fNjEvkX9nGXLzYcjRVdVGkwx"}
                    onChange={(value) => setVerified(!!value)}
                    className="py-2"
                  />

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={!isVerified} // Disable button if reCAPTCHA is not verified
                    className="my-4 text-sm font-light leading-6 text-white p-2 px-8 border-2 rounded-full duration-500 ease-in-out transform overflow-hidden hover:bg-white/95 hover:text-gray-900 hover:shadow-xl hover:shadow-gray-900/30"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-4 sm:py-4 lg:px-8 font-light">
        <p className="text-center text-xs text-white">
          <br />
          Copyright &copy;{new Date().getFullYear()} 9th Vision - All rights
          reserved.
          <br />
          <span className="text-xs">
            Developed by{" "}
            <Link
              className="hover:text-red-500"
              href={"https://www.enovtechnologies.com/"}
              target="_blank"
            >
              ENOV Technologies
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
}
