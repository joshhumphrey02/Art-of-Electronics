"use client";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const linkClass =
  "flex items-center gap-2 font-normal px-3 py-2 hover:bg-neutral-400 hover:no-underline active:bg-sky-400 rounded-sm text-base";

export function ActiveLinks({ link }) {
  const pathname = usePathname();
  const editLink = (path) => {
    let newLink = path.split("/")[2] ? path.split("/")[2] : "dashboard";
    return newLink;
  };
  return (
    <Link
      href={link.path}
      className={classNames(
        link.key === editLink(pathname)
          ? "bg-sky-500 text-white"
          : "text-neutral-300",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      <span className="side-text">{link.label}</span>
    </Link>
  );
}
