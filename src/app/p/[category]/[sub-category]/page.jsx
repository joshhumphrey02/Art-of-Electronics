"use client";
import { usePathname } from "next/navigation";
import { productz } from "@/models/utils/products";
import SubRows from "@/components/products/SubRows";

const page = () => {
  const path = usePathname();
  const sub = path.split("/")[3];
  return (
    <div>
      <h2 className="seg_bg_primary capitalize text-center text-2xl h-12 mb-3 ">
        {sub}
      </h2>
      <SubRows products={productz} />
    </div>
  );
};

export default page;
