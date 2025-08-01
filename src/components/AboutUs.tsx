import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-20 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold text-green-800 mb-8">About Us</h1>

        <p className="text-lg text-gray-700 mb-5 leading-relaxed">
          Welcome to <strong>The Recipe Room</strong> — your go-to destination for delicious,
          homemade recipes from around the world. We bring together taste and
          tradition with easy-to-follow recipes and inspiring food ideas.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our mission is to make cooking fun and accessible for everyone, whether
          you're a beginner or a seasoned chef.
        </p>

        {/* Founder Section (with Contact Info) */}
        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Founder</h2>
          <img
            src="/123456.png"
            alt="Founder"
            className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Keyur Divan</h3>
          <p className="text-md text-gray-600 font-medium mb-1">Founder & Lead Developer</p>

          {/* Contact Info */}
          <p className="text-gray-700 text-md mt-3">
            📞 <span className="font-medium">+91 9316163469</span>
          </p>
          <a href="mailto:keyurdivan@gmail.com" className="text-blue-600 underline">
  keyurdivan@gmail.com
</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
