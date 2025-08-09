import React, { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    // Simulate preloader hide after window load
    const handleLoad = () => {
      document.documentElement.classList.remove("ss-preload");
      document.documentElement.classList.add("ss-loaded");

      // Hide preloader div after animation
      const loader = document.getElementById("loader");
      const preloader = document.getElementById("preloader");

      if (loader) {
        loader.style.display = "none";
      }
      if (preloader) {
        preloader.style.display = "none";
      }
    };

    window.addEventListener("load", handleLoad);
    document.documentElement.classList.add("ss-preload");

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div id="preloader">
      <div id="loader" className="dots-fade">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
