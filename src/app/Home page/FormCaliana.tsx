import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSteps = [
  {
    title: "Masukkan email anda",
    type: "email",
  },
  {
    title: "Masukkan nama perusahaan anda",
    type: "text",
  },
  {
    title: "Masukkan password anda",
    type: "password",
  },
  {
    title: "Konfirmasi password anda",
    type: "password",
  },
];

export default function FormCaliana() {
  return (
    <div className="py-20 bg-gradient-to-r from-cyan-50 via-white to-slate-50">
      <h2 className="pb-20 text-xl font-semibold text-center text-blue-400 lg:text-3xl">
        4 Langkah Mudah Untuk Coba Caliana
      </h2>
      <div className="flex items-center justify-center">
        <img
          src="featureImages/business-deal1.png"
          alt="foto"
          className="hidden h-96 lg:block"
        />
        <div className="max-w-[22rem] px-4 md:px-10 bg-white rounded-lg lg:max-w-3xl h-96 md:max-w-xl">
          <Steps />
        </div>
        <img
          src="featureImages/business-deal2.png"
          alt="foto"
          className="hidden h-96 lg:block"
        />
      </div>
    </div>
  );
}

function Steps() {
  const [currStep, setCurrStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <div className="flex flex-col h-full justify-evenly">
      <section className="flex items-center justify-between">
        {formSteps.map((step, i) => (
          <>
            <div
              key={i}
              className={`step-item ${currStep === i + 1 ? "active" : ""} ${
                (i + 1 < currStep || complete) && "complete"
              }`}
            >
              <div className="step">{i + 1}</div>
            </div>
          </>
        ))}
      </section>

      <Input type="email" placeholder="Masukkan Email"/>

      <Button
        className="max-w-md mx-auto"
        variant={"outline"}
        onClick={() => {
          return currStep === formSteps.length
            ? setComplete(true)
            : setCurrStep((prev) => prev + 1);
        }}
      >
        {currStep === formSteps.length ? "Selesai" : "Selanjutnya"}
      </Button>
    </div>
  );
}
