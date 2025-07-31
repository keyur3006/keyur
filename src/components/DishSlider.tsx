import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination /*, Autoplay */ } from "swiper/modules";
import { RecipeCard } from "./RecipeCard";

interface DishSliderProps {
  title: string;
  icon?: string;
  items: any[];
}

export const DishSlider: React.FC<DishSliderProps> = ({ title, icon, items }) => {
  return (
    <div className="w-full mt-16 max-md:mt-10">
      <div className="flex items-center gap-4 mb-6">
        {icon && (
          <img
            src={icon}
            alt="section icon"
            className="w-9 h-9 object-contain"
          />
        )}
        <h2 className="text-3xl font-bold text-black">{title}</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination /* , Autoplay */]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }} // Uncomment this if autoplay is needed
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-4"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id || item.title}>
            <div className="h-full px-1">
              <RecipeCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
