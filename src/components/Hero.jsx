import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "src\\assets\\Swindale\\0699_View_01_01.jpg",
    "src\\assets\\Swindale\\0699_View_02_01.jpg",
    "src\\assets\\Parkside\\0701_View_02_01.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      className="relative h-full w-full z-0"
      style={{ height: "calc(100vh - 5rem)" }} // Adjust the 4rem to match your navbar height
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-500 bg-opacity-60 px-4 space-y-4">
        <img
          src="src/assets/EYD_no_bgrd.svg"
          alt="Logo"
          className="h-48 w-auto lg:pl-10 md:pl-7 min-[320px]:pl-7 sm:h-64 md:h-96"
        />
        <h1 className="text-slate-950 text-3xl sm:text-4xl font-bold">
          Welcome
        </h1>
        <p className="text-color-paleGreen text-base sm:text-lg md:text-2xl text-center">
          Please scroll to find out more
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
