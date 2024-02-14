"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

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
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={1200}
                    height={800}
                    className=""
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
                    alt=""
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
