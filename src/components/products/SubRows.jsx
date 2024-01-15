"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubRows = ({ products }) => {
  const path = usePathname();
  return (
    <div className="flex seg_bg_primary">
      {products.map((pro) => (
        <div
          key={pro.id}
          className="seg_bg_primary hover:shadow-md border border-gray-400"
        >
          <Link className="p-1" href={`${path}/${pro.name}`}>
            <div className="card_img">
              <Image
                className="w-[200px] h-[200]"
                loading="lazy"
                src={pro.url}
                alt={pro.name}
                width={200}
                height={200}
              />
            </div>
            <div className="text-gray-600">
              <p>{pro.name}</p>
            </div>
            <div className="flex items-center gap-2 text-lg font-medium">
              <span>&#8358;</span>
              <span>{pro.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubRows;
