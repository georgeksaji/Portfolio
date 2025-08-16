import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
// import $ from "jquery";
import { Parallax } from "react-scroll-parallax";
import ShinyText from "./ShinyText/ShinyText.jsx";
import RotatingText from "./RotatingText/RotatingText.jsx";
import Ribbons from "./Ribbons/Ribbons.jsx";
import "./HeroBg.css";
import "./HeroSocialIcons.css";

import ScrollVelocity from "./ScrollVelocity/ScrollVelocity.jsx";
import SpotlightCard from "./SpotlightCard/SpotlightCard.jsx";

export default function Hero() {
  const bgRef = useRef(null);

  // Remove old jQuery parallax
  // Add mousemove parallax effect
  useEffect(() => {
    const hero = document.getElementById("hero");
    const bg = bgRef.current;
    if (!hero || !bg) return;

    let animFrame;
    let targetX = 0,
      targetY = 0;
    let currentX = 0,
      currentY = 0;

    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      // Max translate in px
      targetX = x * 30; // adjust 30 for strength
      targetY = y * 20;
    };

    const animate = () => {
      // Smoothly interpolate
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      bg.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      animFrame = requestAnimationFrame(animate);
    };

    hero.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
      bg.style.transform = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "80vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Parallax background image */}
      <Parallax
        translateY={[-60, 60]}
        scale={[0.8, 1.2]}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <div className="hero-bg-image" ref={bgRef} />
      </Parallax>
      {/* Ribbons layer */}
      <Ribbons
        baseThickness={30}
        colors={["#ffffff"]}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Content layer */}
      <section
        id="hero"
        className="s-hero target-section"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "80vh",
        }}
        data-parallax="scroll"
      >
        <div className="row hero-content">
          <div className="column large-full">
            <ShinyText
              text="Hi, I'm George K Saji"
              disabled={false}
              speed={3}
              className="custom-class text-5xl mb-10"
            />
            <br />

            <RotatingText
              texts={["Web Developer", "SEO Engineer", "MCA Student"]}
              mainClassName="text-white text-3xl overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />

            <ul className="hero-social" type="none">
              <li>
                <a
                  href="https://github.com/georgeksaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} className="me-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/georgeksaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} className="me-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/georgeksaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <SiX size={28} className="me-7 hover:color-red" />
                </a>
              </li>
              <li>
                <a href="mailto:georgeksaji14@gmail.com" aria-label="Email">
                  <FaEnvelope size={28} className="me-7" />
                </a>
              </li>
            </ul>
          </div>


        <ScrollVelocity velocity={-25} numCopies={3}>
          {/* Tech stack logos - remove wrapper div to avoid gaps */}
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/html5/E34F26"
                alt="HTML5"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                alt="CSS3"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/javascript/F7DF1E"
                alt="JavaScript"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/c/00599C"
                alt="C"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/cplusplus/00599C"
                alt="C++"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/php/777BB4"
                alt="PHP"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/laravel/FF2D20"
                alt="Laravel"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/python/3776AB"
                alt="Python"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                alt="Java"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/django/092E20"
                alt="Django"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/git/F05032"
                alt="Git"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                style={{
                  height: 33,
                  backgroundColor: "#ffffffff",
                  borderRadius: "50%",
                }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/mysql/4479A1"
                alt="MySQL"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/postgresql/336791"
                alt="PostgreSQL"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/bootstrap/7952B3"
                alt="Bootstrap"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/tailwindcss/38BDF8"
                alt="TailwindCSS"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/react/61DAFB"
                alt="React"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/vite/646CFF"
                alt="Vite"
                style={{ height: 33 }}
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card w-2/12"
              spotlightColor="rgba(255,255,255,0.03)"
            >
              <img
                src="https://cdn.simpleicons.org/nodedotjs/339933"
                alt="Node.js"
                style={{ height: 33 }}
              />
            </SpotlightCard>
        </ScrollVelocity>
                </div>
      </section>
    </div>
  );
}
