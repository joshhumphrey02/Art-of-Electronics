"use client";
import Image from "next/image";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoRemove } from "react-icons/io5";
import { MdFavorite, MdStarRate } from "react-icons/md";

const Rating = ({ product }) => {
  let totalRate = 0;
  product.reviews.map((rate) => {
    return (totalRate += rate.rating);
  });
  totalRate = totalRate / product.reviews.length;
  let rates = [];
  for (let i = 0; i < totalRate; i++) {
    rates.push(i);
  }
  return (
    <>
      <div className="flex gap-1 my-1">
        {rates.map((rate, index) => (
          <div key={index} className="flex gap-1 items-center">
            <MdStarRate size={16} color="red" />
          </div>
        ))}
        <span>{totalRate}</span>
      </div>
      <div className="my-2">
        <h4 className="my-1">{product.reviews.length} Verified Reviews</h4>
        <h4 className="my-1">24 Orders</h4>
      </div>
    </>
  );
};

const ProductView = ({ product }) => {
  const [image, setImage] = useState(product.images[0].url);
  const [qty, setQty] = useState(1);
  return (
    <div className="flex flex-row gap-2 seg_bg_primary shadow-lg">
      <div className="">
        <div className="p-2">
          <Image
            id="product_img"
            src={image}
            alt={product.name}
            width={400}
            height={300}
            priority={true}
            className="object-fill h-[25rem] w-[28rem] border border-gray-500"
          />
        </div>
        <div className="flex gap-1 mt-2">
          {product.images.map((img, index) => (
            <div key={index} className="p-2" onClick={() => setImage(img.url)}>
              <Image
                id="product_img"
                src={img.url}
                priority={true}
                alt={product.name}
                width={80}
                height={80}
                className="object-contain border border-gray-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="">
          <h1 className="text-2xl font-semibold my-2">{product.name}</h1>
          <div className="flex gap-1 my-1">
            <span>{product.cat}</span>
            {"|"}
            <span>{product.sub}</span>
          </div>
          <div className="my-3">
            <div className="flex items-center text-xl font-medium gap-2">
              <span>&#8358; </span>
              <span>{product.price}</span>
            </div>
            <p className="mt-1">
              {product.in_stock > 10
                ? "In stock"
                : product.in_stock === 0
                ? "Out of stock"
                : "Limited quantity"}
            </p>
          </div>
          <div className="my-3">
            <Rating product={product} />
          </div>
        </div>
        <div className="my-3">
          <p className="my-1">Quantity:</p>
          <div className="flex items-center gap-3 mt-3">
            <span
              className="bg-blue-500 font-medium flex items-center justify-center rounded-full"
              // onClick={() =>
              //   actions("minus", product, (err, msg) => {
              //     err ? toast.error(msg) : toast.success(msg);
              //   })
              // }
            >
              <IoRemove size={24} />
            </span>
            <span className="text-xl font-medium">{qty}</span>
            <span
              className="bg-blue-500 flex items-center justify-center p-1 rounded-full"
              // onClick={() =>
              //   actions("add", product, (err, msg) => {
              //     err ? toast.error(msg) : toast.success(msg);
              //   })
              // }
            >
              <GrAdd size={15} />
            </span>
          </div>
        </div>
        <div className=" mt-[3.6rem] flex justify-between items-center">
          <button className="text-slate-100 bg-blue-500 border rounded-md w-[13rem] py-2 ">
            Add to Cart
          </button>
          <span className="w-[8rem] flex justify-center">
            <MdFavorite size={40} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
