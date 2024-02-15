const stats = [
  { label: "Founded", value: "Email" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];
import ProfilePic from "/public/Bheki.png";
import Image from "next/image";
import Link from "next/link";
import Behance from "/public/behance_b.png";
import Tel from "/public/tel_b.png";
import Email from "/public/email_b.png";
import Linkedin from "/public/linkedin_b.png";

export default function Profile() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Image */}
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                src={ProfilePic}
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#480AEE-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    “I specialise in helping businesses become more streamlined,
                    connected and responsive to the marketplace through incisive
                    digital communication strategies.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">
                    Bhekisipho Maphosa,
                  </strong>{" "}
                  Founder of 9thVision
                </figcaption>
              </figure>
            </div>
          </div>
          {/* Image end */}

          <div>
            <div className="text-base leading-7 text-gray-900 lg:max-w-lg">
              <p className="text-lg font-semibold leading-7">Bheki Maphosa</p>
              <h1
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                style={{ color: "#480AEE" }}
              >
                CREATIVE CONSULTANT & DIGITAL MARKETER
              </h1>
              <p className="text-lg font-semibold leading-7 text-gray-800">
                As far as your market is concerned, you have two options: either
                speak to them in their language, or be replaced by someone who
                can.
              </p>
              <div className="max-w-xl">
                <p className="mt-6">
                  Bheki Maphosa is an experienced strategic creative who has
                  worked with numerous international communications, marketing
                  and advertising organisations. His wealth of brand management
                  experience and expertise in addition to the various career
                  roles over a 14-year period have provided him with a rounded
                  knowledge and understanding of how to construct, implement and
                  metrically analyze brand strategies for diverse demographics.
                </p>
                <p className="mt-8">
                  Bheki has worked as a Creative Director, Senior Art Director,
                  Studio Manager, Brand Manager, Digital Content Manager and
                  Visual Auditor for a vast number of clients which operate in
                  various segments of the market. Therefore, it is this
                  diversification of specializations in brand strategy and
                  management which attributes to his overall success in the
                  industry.
                </p>
                <p className="mt-8">
                  I specialise in helping businesses become more streamlined,
                  connected and responsive to the marketplace through incisive
                  digital communication strategies. Today, customers have more
                  options, little patience and are more critical of the
                  companies they engage with. The thing is, if you can’t relate
                  to your audience, using their language and meeting them where
                  they are, you won’t be around for much longer…
                </p>
                <p className="mt-8">
                  Clients are your success, and how you keep meeting their
                  needs, retaining their trust, while providing for them,
                  matters now more than ever. They are fed up with ineffective
                  branding and advertising which says and does nothing. <br />
                  If you’re a company that’s tired of agencies promising
                  marketing heaven, but seeing no change to your bottom line,
                  I’ll show you how authentically connecting with your clients
                  and delivering them REAL VALUE will increase revenue, secure
                  long-term business and establish a leading position in the
                  market.
                  <br />
                  To bring about your business growth, i use incisive content,
                  persuasive storytelling and customer-driven marketing which
                  really speaks the language of your audience.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-4 gap-2 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {/* email */}
              <div>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  {/* email */}
                  <Link
                    href={"mailto:bheki@9thvision.com"}
                    target="_blank"
                    className="border border-white rounded-full flex p-1 m-3 hover:scale-110 duration-500 ease-in-out transform"
                  >
                    <Image
                      width={500}
                      height={500}
                      className="h-8 w-8"
                      src={Email}
                      alt="Logo"
                    />
                  </Link>
                </dd>
              </div>
              {/* Behance */}
              <div>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  {/* Behance */}
                  <Link
                    href={"https://www.behance.net/bheki"}
                    target="_blank"
                    className="border border-white rounded-full flex p-1 m-3 hover:scale-110 duration-500 ease-in-out transform"
                  >
                    <Image
                      width={500}
                      height={500}
                      className="h-8 w-8"
                      src={Behance}
                      alt="Logo"
                    />
                  </Link>
                </dd>
              </div>
              {/* Tel */}
              <div>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  {/* Tel */}
                  <Link
                    href={"tel:+264 81 201 9135"}
                    target="_blank"
                    className="border border-white rounded-full flex p-1 m-3 hover:scale-110 duration-500 ease-in-out transform"
                  >
                    <Image
                      width={500}
                      height={500}
                      className="h-8 w-8"
                      src={Tel}
                      alt="Logo"
                    />
                  </Link>
                </dd>
              </div>{" "}
              {/* Linkedin */}
              <div>
                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  {/* Linkedin */}
                  <Link
                    href={
                      "https://www.linkedin.com/in/bheki-maphosa-245b6926?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    }
                    target="_blank"
                    className="border border-white rounded-full flex p-1 m-3 hover:scale-110 duration-500 ease-in-out transform"
                  >
                    <Image
                      width={500}
                      height={500}
                      className="h-8 w-8"
                      src={Linkedin}
                      alt="Logo"
                    />
                  </Link>
                </dd>
              </div>
            </dl>
            <div className="mt-10 flex">
              <h1 className="text-base font-semibold leading-7 text-gray-900">
                I look forward to working with you.
              </h1>
              <br />
              {/* <a
                href="#"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Email:
                <a href="mailto:bheki.maphosa@gmail.com">
                  bheki.maphosa@gmail.com
                </a>
                LinkedIn/Bheki Maphosa www.be.net/bheki Mobile: +264 81 201 9135
                <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
