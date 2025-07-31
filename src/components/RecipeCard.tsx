// Updated RecipeCard.tsx

import React from "react";
import { Link } from "react-router-dom";

export interface RecipeCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  quantity: string;
  description: string;
  imageAlt?: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  image,
  title,
  price,
  rating,
  quantity,
  description,
  imageAlt = "",
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starSrc =
        i < Math.floor(rating)
          ? "https://api.builder.io/api/v1/image/assets/TEMP/b8a2cafbefb30d676a3a64694d2ad2a66ddbaafd?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
          : i === Math.floor(rating) && rating % 1 !== 0
          ? "https://api.builder.io/api/v1/image/assets/TEMP/28d816dd0284c5d984c359268f23d1ea6cbde4dc?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
          : "https://api.builder.io/api/v1/image/assets/TEMP/c764cba2be4aaaa759f118108194a8c47331ff79?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33";

      stars.push(
        <img
          key={i}
          src={starSrc}
          alt={`Star ${i + 1}`}
          className="object-contain shrink-0 w-4 h-4 rounded-2xl"
        />
      );
    }
    return stars;
  };

  return (
    <Link to={`/recipe/${id}`}>
      <article className="flex flex-col h-[480px] w-full rounded-2xl bg-zinc-300 overflow-hidden max-md:mt-10 transition-all duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(255,0,0,0.4)] hover:scale-[1.02] cursor-pointer">
        <img
          src={image}
          alt={imageAlt || title}
          className="object-cover w-full h-60 rounded-t-2xl"
        />
        <div className="flex flex-col px-4 py-5 grow">
          <div className="flex justify-between items-start">
            <div className="flex flex-col text-xl font-bold text-black">
              <h3>{title}</h3>
              <div className="mt-1.5">{price}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex gap-px">{renderStars(rating)}</div>
              <div className="mt-2 text-xl font-bold text-black">{quantity}</div>
            </div>
          </div>
          <p className="mt-auto text-base text-black line-clamp-2 leading-snug">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};