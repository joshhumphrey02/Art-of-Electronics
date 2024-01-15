import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";

const Help = [
  { help: "Help Center" },
  { help: "Contact Us" },
  { help: "How to shop on Art of Electronics?" },
  { help: "Delivery options and timelines" },
  { help: "How to return a product on Art of Electronics?" },
  { help: "Corporate and bulk purchases" },
  { help: "Report a Product" },
  { help: "Address not found?" },
  { help: "Dispute Resolution Policy" },
];
const About = [
  { about: "About Us" },
  { about: "Art of Electronics careers" },
  { about: "Art of Electronics Express" },
  { about: "Terms and Conditions" },
  { about: "Privacy and Cookie Notice" },
  { about: "Art of Electronics Prime" },
  { about: "Art of Electronics Global" },
  { about: "Flash Sales" },
  { about: "Electronic Festival 2022" },
];
const Others = [
  { other: "Sell on Art of Electronics" },
  { other: "Become a Sales Consultant" },
  { other: "Art of Electronics Express" },
  { other: "Become a Vendor Service Provider" },
  { other: "Become a Logistics Service Partner" },
  { other: "Join the Art of Electronics Academy" },
  { other: "Join the Art of Electronics Coding Program" },
];

const Connect = [
  {
    svg: <BsTwitter />,
    name: "Twitter",
    path: "/twitter.com",
  },
  {
    svg: <BsInstagram />,
    name: "Instagram",
    path: "/instagram.com",
  },
  {
    svg: <BsFacebook />,
    name: "Facebook",
    path: "/facebook.com",
  },
  {
    svg: <BsWhatsapp />,
    name: "Whatsapp",
    path: "/whatsapp.com",
  },
];

function Footer() {
  return (
    <footer className="seg_bg_primary pt-4 pl-4 pb-6 seg_container">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-2">
        <div className="mx-auto">
          <span className="text-xl">LET US HELP YOU</span>
          <ul className="mt-2">
            {Help.map((h) => (
              <li className="mt-2" key={h.help}>
                <Link
                  className="text-gray-900 hover:text-gray-500 mt-2 cursor-pointer"
                  href={`#/${h.help.toLowerCase()}`}
                >
                  {h.help}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto">
          <span className="text-xl">ABOUT </span>
          <ul className="mt-2">
            {About.map((ab) => (
              <li className="mt-2" key={ab.about}>
                <Link
                  className="text-gray-900 hover:text-gray-500 mt-2 cursor-pointer"
                  href={`#/${ab.about.toLowerCase()}`}
                >
                  {ab.about}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto">
          <span className="text-xl">MAKE MONEY WITH US</span>
          <ul className="mt-2">
            {Others.map((other) => (
              <li className="mt-2" key={other.other}>
                <Link
                  className="text-gray-900 hover:text-gray-500 mt-2 cursor-pointer"
                  href={`#/${other.other.toLowerCase()}`}
                >
                  {other.other}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto">
          <span className="text-xl">CONNECT US ON</span>
          <ul className="mt-2">
            {Connect.map((sos) => (
              <li className="" key={sos.name}>
                <Link
                  className="flex gap-2 items-center text-gray-900 hover:text-gray-500 mt-2 cursor-pointer"
                  href={sos.path}
                >
                  {sos.svg}
                  {sos.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-2 mb-3 text-center border-t border-gray-400 pt-2">
        <p>&copy; 2022 Arts of Electronics, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
