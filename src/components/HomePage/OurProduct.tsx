import { Button } from "@/components/ui/button";
import { calianaProducts } from "@/utils/homeConstants";

export default function OurProduct() {
  return (
    <>
      <p className="text-3xl font-semibold text-center text-blue-400 mb-28">
        Produk Kami
      </p>
      <div className="flex gap-6 py-24 justify-evenly lg:gap-0 bg-slate-50 rounded-3xl">
        {calianaProducts.map((product) => (
          <div
            className={`max-w-3xl shadow-xl size-80 px-4 rounded-xl lg:mt-10`}
            key={product.title}
          >
            <div
              key={product.title}
              className={`relative flex items-center justify-start h-full`}
            >
              <img
                src={product.image}
                alt="image"
                className="absolute bottom-36"
              />
              <div className="flex flex-col items-center px-8 pt-40">
                <span className="font-semibold text-center text-gray-800 max-w-56">
                  {product.title}
                </span>
                <Button className="my-6 bg-blue-400">Selengkapnya</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
