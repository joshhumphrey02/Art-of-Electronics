"use client";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";
const { currentCustomer } = require("@/models/Profile");

export default function SideProfile() {
  return (
    <div className="h-full w-full bg-slate-100 p-3">
      <div className="flex justify-center">
        <Image
          src="/images/profile.png"
          alt="Profile image"
          width={40}
          height={40}
          className="rounded-full mb-2"
        />
      </div>
      <div className="text-center">
        <h4>Welcome to</h4>
        <h4>Arts of Electronics</h4>
      </div>
      {currentCustomer ? (
        <div className=" mt-3 mb-4 justify-center">
          <h1 className=" text-xl font-medium">
            {currentCustomer.displayName}
          </h1>
        </div>
      ) : (
        <div className="flex mt-3 mb-4 justify-between">
          <Button href={"/auth/login"} className=" text-white" variant="info">
            Sign in
          </Button>
          <Button
            href={"/auth/register"}
            className=" text-white"
            variant="warning"
          >
            Sign Up
          </Button>
        </div>
      )}
      <div className="bg w-full text-center mx-auto py-3 bg-sky-300 flex flex-col justify-center">
        <h5>Exclusive Offers</h5>
        <h6>Just for new members</h6>
        <div className="grid h-[12rem] mt-3 p-1 grid-cols-2 gap-1">
          <Image
            src="/images/bck5.jpg"
            alt="Profile image"
            width={100}
            height={20}
            className=" h-[8rem] object-fill"
          />
          <Image
            src="/images/bck4.jpg"
            alt="Profile image"
            width={100}
            height={40}
            className="h-[8rem] object-fill"
          />
        </div>
      </div>
    </div>
  );
}
