import React from "react";

const DesignProcess = () => {
  return (
    <section
      id="design-process"
      className="py-12 px-6 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Design Process
        </h2>
        {/* Description */}
        <p className="mb-6 text-lg leading-relaxed">
          Here at EYD, we are with you every step of the way and take time to
          engage with our clients to explain the full cycle of the
          pre-construction cycle from the outset. We closely follow the RIBA
          Plan of Works as set out below.
        </p>

        {/* Download Button */}
        <a
          href="src\assets\Riba Plan of Works.pdf" // Replace with actual file path
          download
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Download RIBA Plan of Works
        </a>
      </div>
    </section>
  );
};

export default DesignProcess;
