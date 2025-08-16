import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExclamationCircle } from "react-icons/fa";
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
          paddingBottom: "1rem",
        }}
        data-parallax="scroll"
      >
        <div className="row hero-content">
          <div className="column hero-column large-full">
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

            <ul className="hero-social flex gap-7" type="none">
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
          <div className="w-full">
          <ScrollVelocity velocity={40} numCopies={3}>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" style={{ height: 25 }} /> <h5 className="tech-label">HTML5</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" style={{ height: 25 }} /> <h5 className="tech-label">CSS3</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" style={{ height: 25 }} /> <h5 className="tech-label">JavaScript</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/c/00599C" alt="C" style={{ height: 25 }} /> <h5 className="tech-label py-10">C</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/cplusplus/00599C" alt="C++" style={{ height: 25 }} /> <h5 className="tech-label">C++</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/php.png" alt="PHP" style={{ height: 25 }} /> <h5 className="tech-label">PHP</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" style={{ height: 25 }} /> <h5 className="tech-label">Laravel</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/python.png" alt="Python" style={{ height: 25 }} /> <h5 className="tech-label">Python</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/java.webp" alt="Java" style={{ height: 25 }} /> <h5 className="tech-label">Java</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/django.png" alt="Django" style={{ height: 25 }} /> <h5 className="tech-label">Django</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/git/F05032" alt="Git" style={{ height: 25 }} /> <h5 className="tech-label">Git</h5></SpotlightCard> 
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/github.png" alt="GitHub" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">GitHub</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/unlighthouse.png" alt="Unlighthouse" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">Unlighthouse</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/mysql.png" alt="MySQL" style={{ height: 25 }} /> <h5 className="tech-label">MySQL</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/canva.png" alt="Canva" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">Canva</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/chatgpt.png" alt="ChatGPT" style={{ height: 25 }} /> <h5 className="tech-label">ChatGPT</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/copilot.png" alt="Copilot" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">Copilot</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/perplexity.png" alt="Perplexity" style={{ height: 25 }} /> <h5 className="tech-label">Perplexity</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/gemini.png" alt="Gemini" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">Gemini</h5></SpotlightCard>
            </ScrollVelocity>
            <ScrollVelocity velocity={-40} numCopies={3}>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/hostinger.png" alt="Hostinger" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">Hostinger</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/numpy.svg" alt="NumPy" style={{ height: 25 }} /> <h5 className="tech-label">NumPy</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/postgresql/336791" alt="PostgreSQL" style={{ height: 25 }} /> <h5 className="tech-label">PostgreSQL</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/bootstrap/7952B3" alt="Bootstrap" style={{ height: 25 }} /> <h5 className="tech-label">Bootstrap</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/tailwindcss/38BDF8" alt="TailwindCSS" style={{ height: 25 }} /> <h5 className="tech-label">TailwindCSS</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" style={{ height: 25 }} /> <h5 className="tech-label">ReactJS</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/vitejs.png" alt="Vite" style={{ height: 25 }} /> <h5 className="tech-label">ViteJS</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" style={{ height: 25 }} /> <h5 className="tech-label">NodeJS</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/lighthouse.svg" alt="Lighthouse" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">Lighthouse</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/openweathermap.png" alt="OpenWeatherMap" style={{ height: 25, borderRadius: "50%" }} /> <h5 className="tech-label">OpenWeatherAPI</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/vscode.svg" alt="Visual Studio Code" style={{ height: 25 }} /> <h5 className="tech-label">VS Code</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/jupyter.png" alt="Jupyter" style={{ height: 25 }} /> <h5 className="tech-label">Jupyter</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/docker.svg" alt="Docker" style={{ height: 25 }} /> <h5 className="tech-label">Docker</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/gitlab.webp" alt="GitLab" style={{ height: 25 }} /> <h5 className="tech-label">GitLab</h5></SpotlightCard>
            <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255,255,255,0.03)"><img src="/icons/android.png" alt="Android" style={{ height: 25 }} /> <h5 className="tech-label">Android Studio</h5></SpotlightCard>
          </ScrollVelocity>
          </div>
        </div>
          
      </section>
      <div className="w-full px-3 text-white text-center mt-0 tech-label-text mb-4 md:px-40">
           {/* exclamation lucide icon */}
        <span role="img" aria-label="exclamation" className="inline-block mr-2">
          <FaExclamationCircle className="w-4 h-4 inline-block" />
        </span>
           These are the technologies and tools I have worked with and explored, but my strongest expertise is in C++, Python, HTML, CSS, JavaScript, MySQL, Laravel, Django, and Bootstrap.
        </div>
    </div>
  );
}
