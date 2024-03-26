import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function TopSection() {
  const words = ["Seamless", "Effective", "Secure"];
  const [currWord, setCurrWord] = useState(words[0]);

  useEffect(() => {
    const intervalWord = setInterval(() => {
      const nextIndex = (words.indexOf(currWord) + 1) % words.length;      
      setCurrWord(words[nextIndex]);
    }, 2000);

    return () => clearInterval(intervalWord);
  }, [words, currWord]);

  return (
    <section className="flex flex-col gap-6 lg:flex-row-reverse lg:justify-evenly">
      <div className="flex flex-col items-start justify-center max-w-xl gap-2 mx-auto">
        <span className="text-3xl font-bold text-center lg:text-start lg:text-4xl text-slate-800 ">
          <span key={currWord} className="text-blue-400">{currWord} </span>
          Visitor Management with Caliana!
        </span>

        <span className="text-sm font-medium text-center lg:text-start lg:text-base text-balance text-slate-800">
          Effortlessly manage visitor check-ins, track guest activity, and
          ensure a secure environment.
        </span>

        <div className="hidden lg:block">
          <Button className="bg-blue-400">Simulasi Disini</Button>
        </div>
      </div>
      <div className="lg:w-[720px]">
        <video autoPlay muted loop>
          <source src="CalianaVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center lg:hidden">
        <Button className="bg-blue-400">Simulasi Disini</Button>
      </div>
    </section>
  );
}
