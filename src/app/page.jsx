"use client";
import SideLink from "@/components/home/SideLink";
import CarouselImage from "@/components/home/Carousel";
import SideProfile from "@/components/home/SideProfile";
import Featured from "@/components/home/Featured";
import Products from "@/components/home/Products";
// import { useAuth } from "@/models/firebase/auth";

export const metadata = {
  title: "Arts of Electronics",
  description: "Your first stop electronic online website",
};

export default function page() {
  // const { user } = useAuth();
  return (
    <div className="">
      <div
        style={{ gridTemplateColumns: "17% 60% 20%" }}
        className="grid gap-3 mt-10 overflow-hidden h-[450px]"
      >
        <SideLink />
        <div className="w-full">
          <CarouselImage />
        </div>
        <SideProfile />
      </div>
      {/*  start products and its a lot */}
      <div className="mt-4">
        <Featured />
        <Products />
      </div>
      {/*  end products and its a lot */}
    </div>
  );
}
