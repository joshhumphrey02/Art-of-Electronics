import Image from "next/image";
import Link from "next/link";
import { MdStarRate } from "react-icons/md";

const productz = [
  {
    id: 1,
    name: "1k Resistor",
    url: "/products/1k-resistor.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 2,
    name: "10k Resistor",
    url: "/products/10k-resistor.jpg",
    rating: 4,
    price: 50,
  },
  {
    id: 3,
    name: "IN4007 Diode",
    url: "/products/4007-diode.jpg",
    rating: 5,
    price: 100,
  },
  {
    id: 4,
    name: "L7812",
    url: "/products/L7812.jpg",
    rating: 2,
    price: 200,
  },
  {
    id: 5,
    name: "NE555 Timer IC",
    url: "/products/NE555.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 6,
    name: "Soldering Iron",
    url: "/products/soldering iron.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 7,
    name: "1k Resistor",
    url: "/products/1k-resistor.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 8,
    name: "10k Resistor",
    url: "/products/10k-resistor.jpg",
    rating: 4,
    price: 50,
  },
  {
    id: 9,
    name: "IN4007 Diode",
    url: "/products/4007-diode.jpg",
    rating: 5,
    price: 100,
  },
  {
    id: 10,
    name: "L7812",
    url: "/products/L7812.jpg",
    rating: 2,
    price: 200,
  },
  {
    id: 11,
    name: "NE555 Timer IC",
    url: "/products/NE555.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 12,
    name: "Soldering Iron",
    url: "/products/soldering iron.jpg",
    rating: 5,
    price: 50,
  },
];

const Rating = ({ rating }) => {
  let rates = [];
  for (let i = 0; i < rating; i++) {
    rates.push(i);
  }
  return (
    <>
      {rates.map((rate) => (
        <div key={rate} className="flex gap-1 items-center">
          <MdStarRate size={16} color="red" />
        </div>
      ))}
      <span>{rating}</span>
    </>
  );
};

const Products = () => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-2">
      {productz.map((product) => (
        <div className="card" key={product.id}>
          <Link
            key={product.id}
            className="p-1 text-black"
            href={`/products/category/${product.id}`}
          >
            <div className="p-2 mb-1 mx-auto w-[11.5rem] overflow-hidden h-[11rem]">
              <Image
                className="object-fill bg-transparent"
                style={{ maxHeight: "170px" }}
                width={160}
                height={130}
                loading="lazy"
                src={product.url}
                alt={product.name}
              />
            </div>
            <div className="mt-2 mb-3">
              <p>{product.name}</p>
            </div>
            <div className="flex gap-1">
              <Rating rating={product.rating} />
            </div>
            <div className="">
              <span>&#8358;</span>
              <span>{product.price}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
