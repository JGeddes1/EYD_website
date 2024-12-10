import React from "react";
import HeroSection from "./components/Hero";
import Gallery from "./components/Gallery";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DesignProcess from "./components/Design_process";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <About></About>
      <Services />
      <DesignProcess />
      <main
        className="container mx-auto mt-8"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Previous Projects
        </h1>
      </main>
      <Gallery />
      <Contact></Contact>
      <Footer />
    </div>
  );
};

export default App;
