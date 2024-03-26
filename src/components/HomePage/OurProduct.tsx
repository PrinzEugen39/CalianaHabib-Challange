import { Button } from "@/components/ui/button";
import { calianaProducts } from "@/utils/homeConstants";

export default function OurProduct() {
  return (
    <>
      <p className="text-3xl font-semibold text-center text-blue-400 mb-28">Produk Kami</p>
      <div className="flex flex-col pb-12 lg:flex-row bg-slate-50 rounded-3xl">
        {calianaProducts.map((product) => (
          <div className="max-w-3xl mx-auto shadow-xl mt-36 size-80 rounded-xl lg:mt-10">
            <div
              key={product.title}
              className="relative flex flex-col items-center justify-center h-full"
            >
              <img
                src={product.image}
                alt="image"
                className="absolute bottom-36"
              />
              <span className="mt-40 font-semibold text-center text-gray-800 max-w-56">
                {product.title}
              </span>
              <Button className="my-6 bg-blue-400">Selengkapnya</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
