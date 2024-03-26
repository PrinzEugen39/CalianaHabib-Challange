import { calianaIndustry } from "@/utils/homeConstants";

export default function OurIndustry() {
  return (
    <div className="flex flex-col items-center pt-20">
      <h2 className="mb-20 text-xl font-semibold text-center text-blue-400 lg:text-3xl">
        Kami Mendukung Berbagai Industri
      </h2>
      <div className="flex flex-col gap-4 max-w-7xl lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
        {calianaIndustry.map((industry) => {
          return (
            <div key={industry.title} className={`relative grow`}>
              <img
                src={industry.image}
                alt="image"
                className="object-cover w-full h-56 rounded-sm"
              />
              <div className="absolute bottom-3 left-6">
                <span className="tracking-wide text-white">
                  {industry.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
