import { Button } from "@/components/ui/button";
import { calianaProducts } from "@/utils/homeConstants";

export default function OurProduct() {
  return (
    <>
      <p className="text-3xl font-semibold text-center text-blue-400 mb-28">
        Produk Kami
      </p>
      <div className="flex flex-col gap-6 py-24 bg-slate-50 rounded-3xl">
        {calianaProducts.map((product, i) => (
          <div
            className={`max-w-3xl mx-auto shadow-xl h-80 w-[540px] px-4 rounded-xl lg:mt-10 ${
              i % 2 === 0 ? "ml-72 mt-60" : "mr-72"
            } `}
            key={product.title}
          >
            <div
              key={product.title}
              className={`relative flex items-center justify-start h-full ${i % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <img
                src={product.image}
                alt="image"
                className=""
              />
              <div className="px-8">
                <span className="mt-40 font-semibold text-center text-gray-800 max-w-56 ">
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
