import React, { useEffect } from "react";
import $ from "jquery";
import ShinyText from "./ShinyText/ShinyText.jsx";
import RotatingText from "./RotatingText/RotatingText.jsx";

export default function Hero() {
  useEffect(() => {
    if (typeof $("#hero").parallax === "function") {
      $("#hero").parallax({ imageSrc: "/images/hero.png" });
    }
  }, []);

  return (
    <section
      id="hero"
      className="s-hero target-section"
      data-parallax="scroll"
      data-image-src="/images/hero.png"
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center"
    >
      <div className="row hero-content">
        <div className="column large-full">
          <ShinyText
            text="Just some shiny text!"
            disabled={false}
            speed={3}
            className="custom-class"
          />
          <br />
          
          <ShinyText
            text="Web Developer"
            speed={2}
            className="text-2xl font-bold text-white mb-4"
          />

          <RotatingText
            texts={["Web Devloper", "SEO Engineer", "MCA Student"]}
            mainClassName="text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />

          <ul className="hero-social">
            <li>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a href="mailto:youremail@example.com">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
