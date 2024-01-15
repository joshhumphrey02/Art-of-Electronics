"use client";
import { PiCurrencyNgnBold } from "react-icons/pi";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const SubTotal = ({ products }) => {
  let fee = 1000;
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let cartTotal = 0;
    let checked = 0;
    products.forEach((product) => {
      if (product.check) {
        checked++;
        cartTotal += product.price * product.qty;
      }
      return;
    });
    setSubTotal(cartTotal);
    setTotal(cartTotal > 0 ? cartTotal + fee : 0);
    setCartItems(checked);
  }, [products]);
  return (
    <div className="">
      <div className="seg_bg_primary p-3 mb-2">
        <h1 className="text-2xl mb-2">Summary</h1>
        <div className="mb-2 flex justify-between">
          <h4>Total items</h4>
          <div className="flex gap-1 items-center">
            <span className="total">{cartItems}</span>
          </div>
        </div>
        <div className="mb-2 flex justify-between">
          <h4>Shipping fee</h4>
          <div className="flex gap-1 items-center">
            <PiCurrencyNgnBold /> <span className="fee">{fee}</span>
          </div>
        </div>
        <div className="mb-2 flex justify-between">
          <h4>Subtotal</h4>
          <div className="flex gap-1 items-center">
            <PiCurrencyNgnBold />
            <span className="">{subTotal}</span>
          </div>
        </div>
        <button className="text-lg flex justify-center w-full mx-auto mt-1 rounded-md text-slate-100 bg-blue-600 hover:bg-blue-500 transition-all p-1 font-medium">
          Place Order (
          <span className="flex items-center">
            <PiCurrencyNgnBold /> {total}
          </span>
          )
        </button>
        <div className="my-2 p-2">
          <p>
            Upon clicking 'Place Order', I confirm I have read and acknowledged
            our{" "}
            <Link href="#" className=" text-sky-400">
              terms and policies
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="seg_bg_primary p-3">
        <h3 className="text-2xl mb-2">Payment methods</h3>
        <div className="flex pl-3 mb-2 gap-3">
          <RiVisaFill size={28} />
          <FaCcMastercard size={28} />
          <span>On Delivery</span>
        </div>
        <h3>Buyer Protection</h3>
        <h5 className="text-sm mt-3 italic">
          Get full refund if the item is not as described or if is not delivered
        </h5>
      </div>
    </div>
  );
};

export default SubTotal;
