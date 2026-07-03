import React from "react";
import assets from "../assets/assets";
import "./Font.css";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center text-center pt-28 px-4 sm:px-12 lg:px-24 xl:px-24 text-xl font-bold"
    >
      {/* Trusted Section */}
      <div className="inline-flex items-center gap-4 mb-9 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img
          src={assets.group_profile}
          alt="hero"
          className="w-20"
        />
        <p className="text-xs font-normal">
          Trusted by 10k people
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl mt-4 bg-gradient-to-r from-blue-400 to-pink-600 text-transparent bg-clip-text leading-relaxed">
        Turning Imagination Into
      </h1>

      <span className="bg-gradient-to-r from-pink-600 to-purple-800 text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-relaxed">
        Reality
      </span>

      {/* Paragraph */}
      <p className="mt-5 mb-8 text-sm sm:text-lg font-light text-gray-500">
        This product will bring revolution in tech terms with AI powered infrastructure
      </p>

      {/* Image Section */}
      <div className="relative">
        <img
          src={assets.hero_img}
          alt="hero main"
          className="w-full max-w-6xl"
        />

        {/* Background Gradient Images */}
        <img
          src={assets.bgImage1}
          alt="gradient"
          className="absolute hidden sm:block -top-32 left-20 -z-10"
        />

        <img
          src={assets.bgImage2}
          alt="gradient"
          className="absolute hidden sm:block -bottom-32 right-20 -z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
