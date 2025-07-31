import React from "react";
import { motion } from "framer-motion";

interface SearchSectionProps {}

export const SearchSection: React.FC<SearchSectionProps> = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-44 ml-10 w-full max-w-[1491px] max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[39%] max-md:ml-0 max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5f55633cc4284becb1a7aefc7064ed4c70d26d72?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
            alt="Delicious food preparation"
            className="object-contain grow w-full aspect-[0.81] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="ml-5 w-[61%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full font-bold text-black max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl max-md:max-w-full">
              "Looking for something spicy, sweet, or traditional? Start typing
              and explore.
            </h2>
            <div className="flex gap-7 self-center px-11 py-8 mt-20 max-w-full text-4xl bg-zinc-300 rounded-[49px] w-[344px] max-md:px-5 max-md:mt-10">
              <input
                type="text"
                placeholder="Search Box"
                className="grow shrink w-44 bg-transparent outline-none placeholder-black"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/526a19b372d7f7be25c6cf674770314210361b14?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
                alt="Search icon"
                className="object-contain shrink-0 w-11 aspect-square cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
