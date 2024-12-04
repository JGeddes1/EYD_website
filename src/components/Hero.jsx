import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "src\\assets\\Hero\\hoot_gateway.jpg",
    "https://via.placeholder.com/1920x1080?text=Image+2",
    "https://via.placeholder.com/1920x1080?text=Image+3",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      className="relative w-full z-0"
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
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-200 bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome
        </h1>
        <p className="text-white text-xl md:text-2xl mt-4 text-center">
          Please scroll to find out more about the company
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
