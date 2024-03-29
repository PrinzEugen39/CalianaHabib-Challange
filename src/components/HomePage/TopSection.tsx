import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function TopSection() {
  const words = useMemo(() => ["Seamless", "Effective", "Secure"], []);
  const [currWord, setCurrWord] = useState(words[0]);

  useEffect(() => {
    const intervalWord = setInterval(() => {
      const nextIndex = (words.indexOf(currWord) + 1) % words.length;
      setCurrWord(words[nextIndex]);
    }, 4000);

    return () => clearInterval(intervalWord);
  }, [words, currWord]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const element = document.getElementById("kesini");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="flex flex-col w-full gap-6 md:gap-12 lg:flex-row-reverse">
      <div className="flex flex-col items-start max-w-2xl gap-2 mx-auto lg:py-4">
        <p className="tracking-widest text-center lg:text-start">
          <motion.span
            key={currWord}
            className="font-bold text-center text-blue-400 lg:text-start"
            initial={{ fontSize: "34px", opacity: 0 }}
            animate={{ fontSize: "33px", opacity: 0.9 }}
            transition={{
              type: "spring",
              bounce: 0.1,
              duration: 1,
            }}
          >
            {currWord} {""}
          </motion.span>
          <span className="text-2xl font-bold lg:text-3xl text-slate-800">
            Visitor Management with Caliana!
          </span>
        </p>

        <span className="max-w-xl text-sm font-medium text-center lg:text-start lg:text-base text-slate-800">
          Effortlessly manage visitor check-ins, track guest activity, and
          ensure a secure environment.
        </span>

        <div className="hidden lg:block">
          <Button className="bg-blue-400" onClick={handleClick}>Simulasi Disini</Button>
        </div>
      </div>

      <div className="lg:w-[720px] rounded-3xl border-8 border-gray-300 shadow-xl">
        <video autoPlay muted loop>
          <source src="CalianaVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-center lg:hidden">
        <Button className="bg-blue-400" onClick={handleClick}>Simulasi Disini</Button>
      </div>
    </section>
  );
}
