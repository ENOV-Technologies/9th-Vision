import Image from "next/image";
import LandingPage from "./components/landingPage";
import About from "./components/about";
import Why from "./components/Why";
import Clients from "./components/clients";
import CTA from "./components/CTA";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      {/* <!-- component --> */}
      {/* <div className="">
        <div className="sticky top-0 h-full flex flex-col overflow-auto">
          <LandingPage />
        </div>
        <div className="sticky top-0 h-full flex flex-col overflow-auto">
          <About />
        </div>
        <div className="sticky top-0 h-full flex flex-col overflow-auto">
          <Why />
        </div>
        <div className="sticky top-0 h-full flex flex-col overflow-auto">
          <Clients />
        </div>
        <div className="sticky top-0 h-full flex flex-col overflow-auto">
          <CTA />{" "}
        </div>
        <div className="sticky top-0 h-full flex flex-col overflow-auto">
          <Contact />{" "}
        </div>
      </div> */}
      <LandingPage />
      <About />
      <Why />
      <Clients />
      <CTA />
      <Contact />
    </>
  );
}
