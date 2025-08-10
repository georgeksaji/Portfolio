import React, { useState, useEffect } from "react";
import StarBorder from "./StarBorder/StarBorder.jsx";
import ConnectButton from "./ResumeButton/ResumeButton.jsx";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [offset, setOffset] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll-based sticky header
  useEffect(() => {
    const hero = document.querySelector(".s-hero");
    const triggerHeight = hero ? hero.offsetHeight - 170 : 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setSticky(scrollY > triggerHeight);
      setOffset(scrollY > triggerHeight + 20);
      setScrolling(scrollY > triggerHeight + 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize if bigger than 900px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Build header classes dynamically
  let headerClasses = "s-header";
  if (sticky) headerClasses += " sticky";
  if (offset) headerClasses += " offset";
  if (scrolling) headerClasses += " scrolling";

  return (
    <header className={headerClasses}>
      <div className="header-logo">
        <a href="/">
          <img src="/images/sign.png" alt="Homepage" />
        </a>
      </div>

      <div
        className={`header-content ${menuOpen ? "menu-is-open" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <nav className="row header-nav-wrap">
          <ul className="header-nav">
            <li>
              <a className="smoothscroll" href="#hero" title="Intro">
                Me
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="Experience">
                Experience
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="Education">
                Education
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="Projects">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio" title="Works">
                Certifications
              </a>
            </li>
            <li>
              <a href="mailto:#0" title="Contact us">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <ConnectButton>Resume</ConnectButton>
      </div>

      {/* Mobile Menu Toggle */}
      <a
        className={`header-menu-toggle ${menuOpen ? "is-clicked" : ""}`}
        href="#0"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen(!menuOpen);
        }}
      >
        <span>Menu</span>
      </a>
    </header>
  );
}
