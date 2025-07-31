import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to The Recipe Room — your go-to destination for delicious,
          homemade recipes from around the world. We bring together taste and
          tradition with easy-to-follow recipes and inspiring food ideas.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
