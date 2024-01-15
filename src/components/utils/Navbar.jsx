"use client";
import { MdFavorite } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Link from "next/link";
import { FcBullish } from "react-icons/fc";

export default function Navbar() {
  return (
    <div style={{ alignItems: "center" }} className="w-full h-9">
      <div className="flex seg_container relative justify-end items-center gap-4 ">
        <div className=" absolute left-0 text-blue-600 gap-2 flex items-center">
          <FcBullish size={22} />
          <Link href="/seller" className=" text-blue-600">
            Sell on art of electronics
          </Link>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-buton" variant="none" title="Help">
            <Dropdown.Item href="#/care">Customer Service</Dropdown.Item>
            <Dropdown.Item href="#/report">Disputes and Report</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <span className="text-sm">Buyer Protection</span>
        </div>
        <div>
          <span className="flex align-middle gap-1 text-sm">
            <GrLanguage size="20" />
            English / NGN
          </span>
        </div>
        <div>
          <span className="flex align-middle text-sm gap-1">
            <MdFavorite size="20" />
            Wish List
          </span>
        </div>
      </div>
    </div>
  );
}
