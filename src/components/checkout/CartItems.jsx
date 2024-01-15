import Image from "next/image";

const CartItems = ({ products }) => {
  return (
    <div className="flex flex-col mt-3 gap-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="seg_bg_primary product py-2 px-4 grid grid-cols-4 gap-3"
        >
          <div className="flex gap-2 items-center">
            <div className="p-1 mb-1 border border-gray-500 w-[9rem] overflow-hidden h-[7rem]">
              <Image
                className="object-cover bg-transparent"
                width={180}
                height={100}
                loading="lazy"
                src={product.url}
                alt={product.name}
              />
            </div>
          </div>
          <div className="flex col-span-3 flex-col gap-2">
            <div className="flex pt-2 h-12 justify-between">
              <h2 className="text-xl capitalize font-medium">{product.name}</h2>
              <div className="flex gap-5"></div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-normal">
                &#8358; <span className="price">{product.price}</span>
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-lg qty">
                  quantity: {""}
                  {product.qty}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
