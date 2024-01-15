import Link from "next/link";
import Image from "next/image";

const Products = [
  {
    id: 1,
    name: "1k Resistor",
    url: "/products/1k-resistor.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 2,
    name: "Soldering Iron",
    url: "/products/soldering iron.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 3,
    name: "IN4007 Diode",
    url: "/products/4007-diode.jpg",
    rating: 5,
    price: 100,
  },
];
const Categories = [
  {
    cat: "Maintainance",
  },
  {
    cat: "Resistors",
  },
  {
    cat: "Capacitors",
  },
  {
    cat: "Modules",
  },
  {
    cat: "Micro Controllers",
  },
];

const Card = ({ products, first }) => {
  let style = first
    ? "p-1 mb-1 border border-gray-500 w-[10rem] first:row-span-2 overflow-hidden h-[10rem]"
    : "p-1 mb-1 border border-gray-500 w-[6rem] overflow-hidden h-[6rem]";
  let style2 = first
    ? "grid grid-cols-2 grid-rows-2 gap-2 mt-3"
    : "grid grid-cols-3 gap-2 mt-3";
  let size = first ? 160 : 100;
  return (
    <div className={style2}>
      {products.map((product) => (
        <Link href={product.url} key={product.id} className={style}>
          <Image
            className="object-cover bg-transparent"
            width={size}
            height={size}
            loading="lazy"
            src={product.url}
            alt={product.name}
          />
        </Link>
      ))}
    </div>
  );
};

const Featured = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
      {Categories.map((category, index) => (
        <div key={category.cat} className="card p-3 first:row-span-2">
          <div className="card_text">
            <h3 className="text-2xl">{category.cat}</h3>
          </div>
          <Card products={Products} first={index == 0 ? true : false} />
        </div>
      ))}
    </div>
  );
};

export default Featured;
