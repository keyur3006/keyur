import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="pt-1.5 pr-2 mt-28 w-full bg-zinc-300 max-md:mt-10 max-md:max-w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="ml-20 w-full max-w-[1314px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          {/* Left Side */}
          <div className="w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-1 font-normal text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-3xl">The Recipe Room</h2>
              <p className="mt-4 text-2xl max-md:max-w-full">
                From our hearts to your home, thank you for joining us in The
                Recipe Room — a place where culinary creativity meets comfort.
                May your days be tasty, your meals be meaningful, and your
                recipes be shared with love.
              </p>
            </div>
          </div>

          {/* Right Side Links */}
          <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:">
                {/* Column 1 */}
                <div className="w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="grow text-black max-md:mt-10">
                    <h3 className="text-2xl">QUICK LINKS</h3>
                    <nav className="flex flex-col items-start px-6 mt-2.5 text-xl whitespace-nowrap max-md:px-5">
                      <a href="#" className="hover:text-gray-700">Home</a>
                      <a href="#" className="mt-4 hover:text-gray-700">Recipes</a>
                      <a href="#" className="mt-3 hover:text-gray-700">Feedback</a>
                    </nav>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="grow text-black max-md:mt-10">
                    <h3 className="text-2xl">QUICK LINKS</h3>
                    <nav className="flex flex-col items-start px-3.5 mt-2.5 text-xl max-md:pr-5">
                      <a href="#" className="self-stretch hover:text-gray-700">Share recipes</a>
                      <a href="#" className="mt-4 hover:text-gray-700">About Us</a>
                      <a href="#" className="mt-3 hover:text-gray-700">Contact</a>
                    </nav>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start text-xl text-black max-md:mt-10">
                    <h3 className="text-2xl">Legal</h3>
                    <a href="#" className="mt-2.5 hover:text-gray-700">Terms of use</a>
                    <a href="#" className="self-stretch mt-3 hover:text-gray-700">Privacy & Cookies</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex mt-14 max-md:mt-10">
        <div className="flex z-10 flex-col grow shrink-0 mr-0 basis-0 w-fit max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/46151c384f9ef686890d43a028c6d1fd976bc9ed?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
            alt=""
            className="object-contain w-full aspect-[1000] max-md:max-w-full"
          />
          <div className="flex z-10 flex-wrap gap-5 justify-between self-center ml-5 w-full max-w-[1506px] max-md:max-w-full">
            <div className="my-auto text-3xl text-black max-md:max-w-full">
              Support :- keyurdivan@gmail.com
            </div>
            <div className="flex">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a6ce2f6992baf375c3512ba6326e6bf04ceb2b49?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
                alt="Social media icon"
                className="object-contain shrink-0 aspect-[1.5] w-[90px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ec393e256fcbc692e76f3703ff9ff3a7f5325297?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
                alt="Social media icon"
                className="object-contain shrink-0 aspect-[1.5] w-[90px]"
              />
            </div>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6eb09a92f8f18fe08e7b1aba0092619c2ccb4473?placeholderIfAbsent=true&apiKey=b59f74ae8c9444f28ee33eff06842d33"
          alt="Social media icon"
          className="object-contain shrink-0 aspect-[1.5] w-[90px]"
        />
      </div>
    </motion.footer>
  );
};
