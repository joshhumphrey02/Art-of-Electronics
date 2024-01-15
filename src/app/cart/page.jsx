"use client";
import Navbar from "@/components/utils/Navbar";
import Header from "@/components/utils/Header";
import Footer from "@/components/utils/Footer";
import CartItems from "@/components/cart/CartItems";
import SubTotal from "@/components/cart/SubTotal";
import { CartActions } from "@/models/users/CartActions";
import { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";

const productz = [
  {
    id: 10,
    name: "L7812",
    url: "/products/L7812.jpg",
    rating: 2,
    qty: 1,
    fav: false,
    check: false,
    price: 200,
  },
  {
    id: 11,
    name: "NE555 Timer IC",
    url: "/products/NE555.jpg",
    rating: 5,
    qty: 1,
    fav: false,
    check: false,
    price: 50,
  },
  {
    id: 12,
    name: "Soldering Iron",
    url: "/products/soldering iron.jpg",
    rating: 5,
    qty: 1,
    fav: false,
    check: false,
    price: 50,
  },
];

const page = () => {
  const [products, setProducts] = useState(productz);
  const [checkbox, setCheckbox] = useState(false);
  const actions = (action, product, callback) =>
    CartActions(action, products, product, setProducts, (err, msg) => {
      callback(err, msg);
    });

  useEffect(() => {
    let checkedAll =
      products.length != 0 ? products.filter((pro) => pro.check !== true) : 0;
    setCheckbox(checkedAll.length === 0 ? true : false);
  }, [products]);
  return (
    <div className="">
      <Navbar />
      <Header cartItems={products.length} />
      <div className="grid seg_container grid-cols-3 mt-3 mb-3 gap-2">
        <div className="col-span-2">
          <div className="flex flex-col bg-slate-100 gap-3 h-[6rem] p-1">
            <h1 className="text-2xl font-medium">
              Shopping Cart (<span>{products.length}</span>)
            </h1>
            <div className="flex items-center ml-6">
              <input
                type="checkbox"
                className="mr-1 w-5 h-5"
                id="genCheckbox"
                checked={checkbox}
                onChange={() =>
                  actions("genCheckBox", null, (err, msg) => {
                    err ? toast.error(msg) : toast.success(msg);
                  })
                }
              />
              <label htmlFor="genCheckbox">Select All</label>
            </div>
          </div>
          <Suspense fallback={<p>Loading feed..</p>}>
            <CartItems products={products} actions={actions} />
          </Suspense>
        </div>
        <Suspense fallback={<p>Loading feed..</p>}>
          <SubTotal products={products} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default page;
