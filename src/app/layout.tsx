import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Socials from "./components/socials";
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/nav';
import ScrollUp from "./components/ScrollUp";


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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon.svg"
          type="image/svg"
          sizes="<generated>"
        />
        {/* <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="57x57"
        /> */}
      </head>
      <body className="relative">
        <Nav/>
        {children}
        <Socials />
        <ScrollUp />
        <Analytics/>
      </body>
    </html>
  );
}
