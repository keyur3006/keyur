import React from "react";
import { RecipeCard } from "./RecipeCard";

interface PopularSectionProps {
  title: string;
  icon: string;
  items: Array<{
    id: string; // ✅ Required for linking to detail page
    image: string;
    title: string;
    price: string;
    rating: number;
    quantity: string;
    description: string;
    imageAlt?: string;
  }>;
}

export const PopularSection: React.FC<PopularSectionProps> = ({
  title,
  icon,
  items,
}) => {
  return (
    <section className="w-full">
      <div className="flex gap-0.5 mt-12 ml-14 text-4xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
        <img
          src={icon}
          alt=""
          className="object-contain shrink-0 self-start aspect-square w-[42px]"
        />
        <h2 className="flex-auto">{title}</h2>
      </div>
      <div className="self-end mt-4 w-full max-w-[1596px] max-md:mr-0.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {items.map((item) => (
            <div key={item.id} className="w-3/12 max-md:w-full">
              <RecipeCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
