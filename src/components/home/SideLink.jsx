"use client";
import Link from "next/link";
import { Categories_Links } from "@/models/utils/categories";
import { GrMenu } from "react-icons/gr";

const SideLink = () => {
  return (
    <div className="seg_bg_primary h-fit w-full p-1 text-dark">
      <div className="mb-3 flex items-center p-1">
        <GrMenu size={30} />
        <span>Categories</span>
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        {Categories_Links.map((link) => (
          <Link
            key={link.key}
            href={`/p${link.path}`}
            className="hover:bg-slate-400 h-9 pl-2 text-slate-900"
          >
            <span className="side-text">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideLink;
