"use client";
import Link from "next/link";
import Image from "next/image";
import { GrFavorite, GrTrash, GrAdd } from "react-icons/gr";
import { IoRemove } from "react-icons/io5";
import { toast } from "react-toastify";

const CartItems = ({ products, actions }) => {
  return (
    <div className="flex flex-col mt-3 gap-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="seg_bg_primary product py-2 px-4 grid grid-cols-4 gap-3"
        >
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={product.check}
              onChange={() =>
                actions("checkBox", product, (err, msg) => {
                  err ? toast.error(msg) : toast.success(msg);
                })
              }
              className="w-4 h-4"
              name="checkbox"
            />
            <Link
              className="p-1 mb-1 border border-gray-500 w-[9rem] overflow-hidden h-[7rem]"
              href={product.url}
            >
              <Image
                className="object-cover bg-transparent"
                width={180}
                height={100}
                loading="lazy"
                src={product.url}
                alt={product.name}
              />
            </Link>
          </div>
          <div className="flex col-span-3 flex-col gap-2">
            <div className="flex pt-2 h-12 justify-between">
              <Link className="text-black" href={product.url}>
                <h2 className="text-xl capitalize font-medium">
                  {product.name}
                </h2>
              </Link>
              <div className="flex gap-5">
                <span
                  onClick={() =>
                    actions("fav", product, (err, msg) => {
                      err ? toast.error(msg) : toast.success(msg);
                    })
                  }
                  className=""
                >
                  <GrFavorite size={23} />
                </span>
                <span
                  onClick={() =>
                    actions("remove", product, (err, msg) => {
                      err ? toast.error(msg) : toast.success(msg);
                    })
                  }
                >
                  <GrTrash size={23} />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-normal">
                &#8358; <span className="price">{product.price}</span>
              </h3>
              <div className="flex items-center gap-3">
                <span
                  onClick={() =>
                    actions("minus", product, (err, msg) => {
                      err ? toast.error(msg) : toast.success(msg);
                    })
                  }
                >
                  <IoRemove size={24} />
                </span>
                <span className="text-lg qty">{product.qty}</span>
                <span
                  onClick={() =>
                    actions("add", product, (err, msg) => {
                      err ? toast.error(msg) : toast.success(msg);
                    })
                  }
                >
                  <GrAdd size={21} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
