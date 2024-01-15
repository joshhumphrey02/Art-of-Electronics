import CartItems from "@/components/checkout/CartItems";
import Location from "@/components/checkout/Location";
import SubTotal from "@/components/checkout/SubTotal";
import Footer from "@/components/utils/Footer";
import Header from "@/components/utils/Header";
import { Suspense } from "react";

const products = [
  {
    id: 10,
    name: "L7812",
    url: "/products/L7812.jpg",
    rating: 2,
    qty: 1,
    check: true,
    price: 200,
  },
  {
    id: 11,
    name: "NE555 Timer IC",
    url: "/products/NE555.jpg",
    rating: 5,
    qty: 1,
    check: true,
    price: 50,
  },
  {
    id: 12,
    name: "Soldering Iron",
    url: "/products/soldering iron.jpg",
    rating: 5,
    qty: 1,
    check: true,
    price: 50,
  },
];

const page = () => {
  return (
    <div className="">
      <Header cartItems={products.length} />
      <div className="grid seg_container grid-cols-3 mt-3 mb-3 gap-2">
        <div className="col-span-2">
          <Location />
          <Suspense fallback={<p>Loading feed..</p>}>
            <CartItems products={products} actions={null} />
          </Suspense>
        </div>
        <Suspense fallback={<p>Loading feed..</p>}>
          <SubTotal products={products} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default page;
