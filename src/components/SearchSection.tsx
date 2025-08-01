import React, { useState } from "react";
import { motion } from "framer-motion";

interface Recipe {
  id: number;
  title: string;
  category: string;
}

const recipes: Recipe[] = [
  { id: 1, title: "Butter Chicken", category: "Popular Indian Dishes" },
  { id: 2, title: "Tiramisu", category: "Top Italian Main Course Dishes" },
  { id: 3, title: "Mojito", category: "Popular Drinks" },
  { id: 4, title: "Paneer Tikka", category: "Popular Indian Dishes" },
  { id: 5, title: "Lasagna", category: "Top Italian Main Course Dishes" },
  { id: 6, title: "Mango Lassi", category: "Popular Drinks" },
];

export const SearchSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const filtered = recipes.filter(
        (recipe) =>
          recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes([]);
    }
  };

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
              "Looking for something spicy, sweet, or traditional? Start typing and explore."
            </h2>
            <div className="flex gap-7 self-center px-11 py-8 mt-20 max-w-full text-4xl bg-zinc-300 rounded-[49px] w-[344px] max-md:px-5 max-md:mt-10">
              <input
                type="text"
                placeholder="Search Box"
                className="grow shrink w-44 bg-transparent outline-none placeholder-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/526a19b372d7f7be25c6cf674770314210361b14?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
                alt="Search icon"
                className="object-contain shrink-0 w-11 aspect-square cursor-pointer"
                onClick={handleSearch}
              />
            </div>

            {/* Search Results */}
            <div className="mt-10 text-left max-w-md mx-auto">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                  <div key={recipe.id} className="p-4 border rounded-md mb-4 bg-white shadow">
                    <h3 className="text-2xl font-semibold">{recipe.title}</h3>
                    <p className="text-gray-600">{recipe.category}</p>
                  </div>
                ))
              ) : searchTerm.trim() !== "" ? (
                <p className="mt-6 text-center text-gray-500">No recipes found for "{searchTerm}"</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
