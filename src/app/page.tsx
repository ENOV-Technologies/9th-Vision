import Image from "next/image";
import LandingPage from "./components/landingPage";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
    </>
  );
}
