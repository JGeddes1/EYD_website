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
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Elliott Young Design is a Chartered Insitute of Architectural
          Technologists registered practice based in the north east of England.
          We specialise in remodelling and extending homes: adding a utility or
          boot room, a bedroom, a porch or maybe a new rear extension and
          kitchen. The practice is led by Elliott Young an architectural
          technologist with many years working in residential design both in the
          UK.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We use the latest in AutoCad and 3D modelling packages and rendering
          programmes. We can also produce advanced design boards, 3D
          walk-through motion video and a range of Presentational Drawings and
          Art Work to support larger projects.
        </p>
      </div>
    </section>
  );
};

export default About;
