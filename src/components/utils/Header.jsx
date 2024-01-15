"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsCart2 } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "next/image";
import { BsPersonFill } from "react-icons/bs";
import { GrOrderedList } from "react-icons/gr";
import { RiMessageFill } from "react-icons/ri";
import { Logout, currentCustomer } from "@/models/Profile";

export default async function Header({ cartItems }) {
  let user = await currentCustomer();
  return (
    <div className="seg_bg_primary">
      <div className="seg_container grid h-16 mb-10 grid-cols-7 gap-2 items-center">
        <Link href="/" className="text-3xl col-span-2 text-black font-medium">
          Art of Electronics
        </Link>
        <div className="col-span-3">
          <Form method="post" action="/search" className="flex">
            <Form.Control
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search product"
            />
            <Button variant="primary" className="bg bg-blue-500" color="white">
              Search
            </Button>
          </Form>
        </div>
        <div className="flex justify-center">
          <DropdownButton
            id="dropdown-basic-buton"
            variant="none"
            title="Account"
            className=" z-20"
          >
            {user ? (
              <>
                <Dropdown.ItemText>
                  <div className="flex justify-center">
                    <Image
                      width={30}
                      height={30}
                      src={
                        user?.photoURL ? user.photoURL : "/images/profile.png"
                      }
                      alt="user profile image"
                    />
                  </div>
                </Dropdown.ItemText>
                <Dropdown.ItemText>
                  <span className="flex justify-center">
                    {user.displayName}
                  </span>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item href="/a/profile">
                  <span className="flex items-center gap-2">
                    <BsPersonFill /> Account
                  </span>
                </Dropdown.Item>
                <Dropdown.Item href="/a/orders">
                  <span className="flex items-center gap-2">
                    <GrOrderedList />
                    My Orders
                  </span>
                </Dropdown.Item>
                <Dropdown.Item href="/a/messages">
                  <span className="flex items-center gap-2">
                    <RiMessageFill />
                    Messages
                  </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.ItemText>
                  <button
                    onClick={async () => await Logout()}
                    className=" text-lg rounded-md py-1 w-full bg-sky-500 hover:bg-sky-400 font-normal text-black "
                  >
                    Logout
                  </button>
                </Dropdown.ItemText>
              </>
            ) : (
              <>
                <Dropdown.Item href="/auth/login">
                  <Button
                    variant="info"
                    size="sm"
                    className="bg-blue-500 uppercase text-lg px-5"
                  >
                    Sign In
                  </Button>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  className="flex items-center gap-2"
                  href="/a/profile"
                >
                  <BsPersonFill /> Account
                </Dropdown.Item>
                <Dropdown.Item
                  className="flex items-center gap-2"
                  href="/a/orders"
                >
                  <GrOrderedList /> My Orders
                </Dropdown.Item>
                <Dropdown.Item
                  className="flex items-center gap-2"
                  href="/a/messages"
                >
                  <RiMessageFill /> Messages
                </Dropdown.Item>
              </>
            )}
          </DropdownButton>
        </div>
        <div className="">
          <Link
            href="/cart"
            className="flex justify-center items-center text-black"
          >
            <span>Cart</span>
            <span className="relative">
              <BsCart2 size="26" />
              <span className="absolute -top-3 -right-4 text-sm/[10px] rounded-full text-white p-1 bg-slate-800">
                {cartItems ? cartItems : 0}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
