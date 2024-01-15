"use client";
import { switcher } from "@/models/utils/subCategory";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { productz } from "@/models/utils/products";
import { RiArrowRightFill } from "react-icons/ri";
import SubRows from "@/components/products/SubRows";

const page = () => {
  const path = usePathname();
  const cat = path.split("/")[2];
  return (
    <div>
      <div className="featured ">
        <h2 className="seg_bg_primary capitalize text-center text-2xl h-12 mb-3 ">
          {cat}
        </h2>
        <div className="features">
          <div className="flex">
            {switcher(cat).map((sub, index) => (
              <Link
                key={index}
                href={`${cat.path2}/${sub.type}`}
                className="text-black seg_bg_primary p-2 h-fit"
              >
                <Image
                  src={"/products/NE555.jpg"}
                  alt="image"
                  width={150}
                  height={150}
                />
                <div className="text-center text-md font-medium">
                  {sub.type}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="sub_section flex flex-col gap-3 mt-3">
        {switcher(cat).map((sub) => (
          <div className="">
            <div
              key={sub.type}
              className="capitalize text-lg font-medium bg-blue-400 h-12 items-center flex justify-between p-1"
            >
              {sub.type}
              <Link
                href={`${path}/${sub.type}`}
                className="flex items-center gap-2"
              >
                View All
                <RiArrowRightFill size={26} />
              </Link>
            </div>
            <SubRows products={productz} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
