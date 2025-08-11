import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
// import $ from "jquery";
import { Parallax } from "react-scroll-parallax";
import ShinyText from "./ShinyText/ShinyText.jsx";
import RotatingText from "./RotatingText/RotatingText.jsx";
import Ribbons from './Ribbons/Ribbons.jsx';
import './HeroBg.css';
import './HeroSocialIcons.css';


export default function Hero() {
  const bgRef = useRef(null);

  // Remove old jQuery parallax
  // Add mousemove parallax effect
  useEffect(() => {
    const hero = document.getElementById('hero');
    const bg = bgRef.current;
    if (!hero || !bg) return;

    let animFrame;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

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

    hero.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      hero.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrame);
      bg.style.transform = '';
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '80vh', overflow: 'hidden', width: '100%' }}>
      {/* Parallax background image */}
      <Parallax translateY={[-60,60]} scale={[0.8, 1.2]} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="hero-bg-image" ref={bgRef} />
      </Parallax>
      {/* Ribbons layer */}
      <Ribbons
        baseThickness={30}
        colors={['#ffffff']}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}
      />
      {/* Content layer */}
      <section
        id="hero"
        className="s-hero target-section"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '80vh',
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
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} className="me-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} className="me-7"  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <SiX size={28} className="me-7 hover:color-red"  />
                </a>
              </li>
              <li>
                <a href="mailto:youremail@example.com" aria-label="Email">
                  <FaEnvelope size={28} className="me-7"  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
