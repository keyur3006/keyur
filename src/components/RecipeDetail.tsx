import React from "react";
import { useParams } from "react-router-dom";
import { allRecipes } from "../data/allRecipes";
import { motion } from "framer-motion";

export const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = allRecipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-red-600 text-xl">
        Recipe not found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-10 flex flex-col md:flex-row gap-6"
    >
      {/* Image with Rotate + Zoom + Fade */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut", type: "spring" }}
        className="md:w-1/2"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[500px] object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Text Animation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut", type: "spring" }}
        className="md:w-1/2"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold mb-2"
        >
          {recipe.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-4 text-gray-700"
        >
          {recipe.description}
        </motion.p>

        <div className="mb-2">
          <span className="font-semibold">Price:</span> {recipe.price}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Quantity:</span> {recipe.quantity}
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </motion.div>
    </motion.div>
  );
};
