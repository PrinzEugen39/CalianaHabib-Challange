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
    }, 2500);

    return () => clearInterval(intervalWord);
  }, [words, currWord]);

  return (
    <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row-reverse">
      <div className="flex flex-col items-start max-w-2xl mx-auto space-y-2 lg:py-4">
        <span className="text-3xl font-bold text-center lg:text-start lg:text-4xl text-slate-800">
          <motion.span
            key={currWord}
            className="text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 0.7,
            }}
          >
            {currWord} {""}
          </motion.span>
          Visitor Management with Caliana!
        </span>

        <span className="max-w-xl text-sm font-medium text-center lg:text-start lg:text-base text-slate-800">
          Effortlessly manage visitor check-ins, track guest activity, and
          ensure a secure environment.
        </span>

        <div className="hidden lg:block">
          <Button className="bg-blue-400">Simulasi Disini</Button>
        </div>
      </div>
      <div className="lg:w-[800px] rounded-3xl border-8 border-gray-300 shadow-xl">
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
