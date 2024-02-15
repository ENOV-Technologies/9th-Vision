"use client";
import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener to update button visibility
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-5 right-5 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="h-8 w-8 text-white border-2 p-1 rounded-full hover:scale-110 transition-opacity duration-300 transform animate-pulse" />
    </button>
  );
}
