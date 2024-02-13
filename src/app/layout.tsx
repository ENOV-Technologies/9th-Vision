import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Socials from "./components/socials";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "9th Vision",
  description: `Story telling has always been part of the African
  way of life and one way of making a memorable impression
  is through your story.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="relative">
        {children}
        <Socials />
      </body>
    </html>
  );
}
