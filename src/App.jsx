import React, { useEffect } from "react";

// CSS imports
import "./assets/css/base.css";
import "./assets/css/main.css";
import "./assets/css/vendor.css";

// Component imports
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

// Import external libraries
import AOS from "aos";
import "aos/dist/aos.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Initialize PhotoSwipe
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".pswp-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
