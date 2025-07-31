import React from "react";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="w-full flex justify-center px-5 mt-10 max-md:px-3">
      <div className="flex flex-wrap items-center gap-10 p-8 bg-white shadow-xl rounded-2xl max-w-[1500px] animate-fade-in-up max-md:p-5">
        {/* Text Box */}
        <div className="flex-1 min-w-[300px] text-2xl font-semibold text-gray-800">
          <p>
            "Welcome to your ultimate food destination — where every recipe is a
            journey, every ingredient has a story, and every dish brings people
            together. From timeless traditional flavors to exciting global
            cuisines, our curated collection is designed to inspire home cooks of
            all skill levels to explore, create, and fall in love with cooking all
            over again."
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 min-w-[300px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3a9595fef8c55f6ba3e063bd90bde9164093f2a1?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
            alt="Food collage showcasing various dishes"
            className="w-full rounded-xl object-cover aspect-[1.6]"
          />
        </div>
      </div>
    </section>
  );
};
