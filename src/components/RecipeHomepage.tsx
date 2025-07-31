import React from "react";
import { motion } from "framer-motion";
import { DishSlider } from "./DishSlider";
import { indianDishes } from "../data/indianDishes";
import { italianDishes } from "../data/italianDishes";
import { drinks } from "../data/drinks";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { SearchSection } from "./SearchSection";
import { Footer } from "./Footer"; // ✅ Footer import

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const RecipeHomepage: React.FC = () => {
  return (
    <div className="overflow-hidden pb-7 bg-white">
      <Header />
      <main className="flex flex-col px-10 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SearchSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <DishSlider
            items={indianDishes}
            title="Popular Indian Dishes"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/3c1898bc88211d8e469dad5c160e7686b8d41041?apiKey=b59f74ae8c9444f28ee33eff06842d33"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <DishSlider
            items={italianDishes}
            title="Top Italian Main Course Dishes"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/e72924603d476c40209a3fc319bd48c6b12860d8?apiKey=b59f74ae8c9444f28ee33eff06842d33"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <DishSlider
            items={drinks}
            title="Popular Drinks"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/f5c2a4bb0c8f107bf46d2cb942bd4d783e4fc81d?apiKey=b59f74ae8c9444f28ee33eff06842d33"
          />
        </motion.div>
        
      </main>

      <Footer /> {/* ✅ Footer added here */}
    </div>
  );
};

export default RecipeHomepage;
