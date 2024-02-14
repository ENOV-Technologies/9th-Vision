import Image from "next/image";
import LandingPage from "./components/landingPage";
import About from "./components/about";
import Why from "./components/Why";
import Clients from "./components/clients";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Why/>
      <Clients/>
      <CTA/>
    </>
  );
}
