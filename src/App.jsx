import React from "react";
import HeroSection from "./components/Hero";
import Gallery from "./components/Gallery";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <About></About>
      <Services />
      <main
        className="container mx-auto mt-8"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Projects
        </h1>
        <p>Below are some projects</p>
      </main>
      <Gallery />
      <Contact></Contact>
      <Footer />
    </div>
  );
};

export default App;
