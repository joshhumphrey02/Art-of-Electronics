"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function CarouselImage() {
  return (
    <Carousel slide className="w-full mt-1 relative h-[445px]">
      <Carousel.Item className="h-[420]">
        <Image
          src="/images/bck1.jpg"
          alt="carousel pix 1"
          width="1000"
          height="50"
        />
        <Carousel.Caption className="absolute top-[60%] text-xl font-medium bg-slate-100 bg-opacity-30 p-3 h-[4rem] justify-center flex items-center">
          <h1>Your no.1 Online Gadget Store</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/images/bck2.jpg"
          alt="carousel pix 2"
          width="1000"
          height="50"
        />
        <Carousel.Caption className="absolute top-[60%] text-xl font-medium bg-slate-100 bg-opacity-30 p-3 h-[4rem] justify-center flex items-center">
          <h1>We also offer Repair and mentainance services</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/images/bck3.jpg"
          alt="carousel pix 3"
          width="1000"
          height="50"
        />
        <Carousel.Caption className="absolute top-[60%] text-xl font-medium bg-slate-100 bg-opacity-30 p-3 h-[4rem] justify-center flex items-center">
          <h1>Every peice of electronic components at your finger tips</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
