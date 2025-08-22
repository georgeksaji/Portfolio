import React, { useEffect } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

// CSS imports
import "./assets/css/base.css";
import "./assets/css/main.css";
import "./assets/css/vendor.css";

// Component imports
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import LightBeamCursor from "./components/LightBeamCursor";

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
    <ParallaxProvider>
      <LightBeamCursor />
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Portfolio />
      </main>
      <Footer />
    </ParallaxProvider>
  );
}
