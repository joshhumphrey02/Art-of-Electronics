"use client";
import { useState } from "react";
import Reviews from "@/components/products/Reviews";
import Location from "@/components/checkout/Location";
import ProductView from "@/components/products/ProductView";
import Description from "@/components/products/Description";
import Features from "@/components/products/Features";
import Specifications from "@/components/products/Specifications";

const product = {
  id: 5,
  name: "NE555 Timer IC",
  images: [
    {
      url: "/products/NE555.jpg",
    },
    {
      url: "/products/lm324.png",
    },
  ],
  price: 500,
  cat: "ICs",
  sub: "timers",
  reviews: [
    {
      user_id: 1,
      user_name: "Kate Dan",
      comment: "its really a good product",
      rating: 4,
      date: "02-09-2023",
      time: "13:28:30",
    },
    {
      user_id: 4,
      user_name: "John Doll",
      comment: "its really a good product",
      rating: 4,
      date: "02-09-2023",
      time: "13:28:30",
    },
    {
      user_id: 6,
      user_name: "Evian Dey Inside",
      comment: "its really a good product",
      rating: 4,
      date: "02-09-2023",
      time: "13:28:30",
    },
  ],
  in_stock: 20,
  desc: "omo this product is a lot, buy it and you will experience a lot",
  feats: [
    {
      key: "its durable",
    },
    {
      key: "its not expensive",
    },
    {
      key: "its itd fast",
    },
    {
      key: "its flexible",
    },
  ],
  specs: [
    {
      key: "color: blue",
    },
    {
      key: "weight: 0.2kg",
    },
    {
      key: "model: ics",
    },
    {
      key: "condition: new",
    },
  ],
};

const page = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className=" h-fit flex justify-between flex-row gap-3">
      <div className="flex-1">
        <ProductView product={product} />
        <Reviews reviews={product.reviews} />
        <Description description={product.desc} />
        <div className=" my-3 p-1 seg_bg_primary grid grid-cols-2">
          <Features features={product.feats} />
          <Specifications specs={product.specs} />
        </div>
      </div>
      <div className="w-[18rem] h-fit seg_bg_primary p-2">
        <h1 className="text-xl font-normal">Delivery & Returns</h1>
        <div className=" border-t border-b border-gray-400 p-1 my-2">
          <h3 className="font-medium mb-1 text-lg">Art of Electronics</h3>
          <p>
            Fast delivery on thousands of components within yenagoa and major
            communities in bayelsa
          </p>
        </div>
        <div className="my-2">
          <h3 className=" font-light">Choose your location</h3>
          <Location />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
