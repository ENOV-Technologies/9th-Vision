import Image from "next/image";
import LandingPage from "./components/landingPage";
import About from "./components/about";
import Why from "./components/Why";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Why/>
    </>
  );
}
