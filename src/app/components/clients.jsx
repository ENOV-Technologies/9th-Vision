"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Catalyst from "/public/Logos/Catalyst.jpg";
import HD from "/public/Logos/HD.jpg";
import Indima from "/public/Logos/Indima.jpg";
import LastTata from "/public/Logos/LastTata.jpg";
import Mureza from "/public/Logos/Mureza.png";
import NTB from "/public/Logos/NTB.jpg";
import SOAS from "/public/Logos/SOAS.jpg";
import Spruit from "/public/Logos/Spruit.png";
import Urgecentum from "/public/Logos/Urgecentum.jpg";
import Wernhil from "/public/Logos/Wernhil.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="h-full" style={{ backgroundColor: "#480AEE" }}>
      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Content */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* Heading */}
                <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-white capitalize">
                  Meet our
                  <br /> happy
                  <br /> Clients
                </h1>
                {/* CTA */}
                <div className="w-full mt-2 flex items-left">
                  <a
                    href="#"
                    className="text-sm font-light leading-6 text-white p-2 px-6 border-2 rounded-full duration-500 ease-in-out transform overflow-hidden hover:bg-white/95 hover:text-gray-900 hover:shadow-xl hover:shadow-gray-900/30"
                  >
                    Join our happy list
                  </a>
                </div>
                {/* Heading end */}
              </div>
            </div>

            {/* Carousel */}
            <div className="container mx-auto px-2 sm:py-40 py-4 ">
              <Slider {...settings}>
                <div>
                  <Image
                    src={Catalyst}
                    alt="Catalyst logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={HD}
                    alt="Healthy Delights logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={Indima}
                    alt="Indima logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={LastTata}
                    alt="LastTata logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={Mureza}
                    alt="Mureza logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={NTB}
                    alt="Namibia Tourism Board logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={SOAS}
                    alt="Soul of Art Shop logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={Spruit}
                    alt="Spruit logo"
                    width={1200}
                    height={800}
                    className="bg-white"
                  />
                </div>

                <div>
                  <Image
                    src={Urgecentum}
                    alt="Urgecentum logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>

                <div>
                  <Image
                    src={Wernhil}
                    alt="Wernhil logo"
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>
                
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
