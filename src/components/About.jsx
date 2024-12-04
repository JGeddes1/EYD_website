import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <section
      id="about"
      className=" py-12 px-6 md:px-12"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-delay="50"
    >
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to EDY! Our company specializes in delivering innovative and
          customer-focused solutions tailored to meet your unique needs. With a
          commitment to excellence and a team of dedicated professionals, we
          strive to make a lasting impact in the industry. Join us on our
          journey to success!
        </p>
      </div>
    </section>
  );
};

export default About;
