import { Button } from "@/components/ui/button";
import { calianaFeatures } from "@/utils/homeConstants";

export default function Features() {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const element = document.getElementById("kesini");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col py-28">
      <p className="pb-12 text-lg font-semibold text-center text-blue-400 lg:font-bold md:text-xl lg:text-3xl">
        Momen Kemudahan Digitalisasi
      </p>
      {calianaFeatures.map((feature, index) => (
        <div
          key={feature.title}
          className={`flex flex-col justify-center lg:flex-row lg:max-w-7xl lg:mx-auto ${
            index % 2 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <img src={feature.image} alt="logo" className="h-fit lg:h-96" />
          <div className="flex flex-col px-4 lg:items-start lg:justify-center">
            <p className="mt-5 font-bold text-gray-500">{feature.title}</p>
            <p className="mt-5 text-sm font-normal leading-loose text-gray-500">
              {feature.description}
            </p>
            <Button className="my-8 bg-blue-400" onClick={handleClick}>
              {feature.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
