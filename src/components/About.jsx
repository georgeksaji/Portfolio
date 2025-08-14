import React from "react";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity.jsx";
import SpotlightCard from "./SpotlightCard/SpotlightCard.jsx";
import {
  DiHtml5, DiCss3Full, DiJavascript1, DiPhp, DiPython, DiJava, DiDjango, DiGit, DiGithub, DiMysql, DiBootstrap, DiReact, DiNodejs
} from "react-icons/di";
import {
  SiC, SiCplusplus, SiLaravel, SiPostgresql, SiTailwindcss, SiVite
} from "react-icons/si";
import "./TechIconHover.css";

export default function About() {
  return (
    <section id="about" className="s-about  target-section">

      <div className="flex flex-row flex-wrap px-10 text-white gap-x-4 gap-y-4" data-aos="fade-up">
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiHtml5 className="tech-icon html5" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiCss3Full className="tech-icon css3" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiJavascript1 className="tech-icon js" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><SiC className="tech-icon c" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><SiCplusplus className="tech-icon cpp" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiPhp className="tech-icon php" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><SiLaravel className="tech-icon laravel" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiPython className="tech-icon python" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiJava className="tech-icon java" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiDjango className="tech-icon django" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiGit className="tech-icon git" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiGithub className="tech-icon github" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiMysql className="tech-icon mysql" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><SiPostgresql className="tech-icon postgresql" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiBootstrap className="tech-icon bootstrap" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><SiTailwindcss className="tech-icon tailwind" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiReact className="tech-icon react" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><SiVite className="tech-icon vite" size={48} /></SpotlightCard>
  <SpotlightCard className="custom-spotlight-card w-2/12" spotlightColor="rgba(255, 255, 255, 0.03)"><DiNodejs className="tech-icon node" size={48} /></SpotlightCard>
      </div>

      <div
        className="row about-content about-stats stats block-1-3 block-m-1-2 block-mob-full"
        data-aos="fade-up"
      >
        <div className="column stats__col">
          <h5>Experience</h5>
          <ul>
            <li>Product Engineer at Revstar Solutions</li>
            <li>Full-Stack Web Development Projects</li>
          </ul>
        </div>

        <div className="column stats__col">
          <h5>Skills</h5>
          <ul>
            <li>React, JavaScript, HTML, CSS</li>
            <li>Laravel, PHP, MySQL</li>
            <li>Java, Python</li>
          </ul>
        </div>

        <div className="column stats__col">
          <h5>Education</h5>
          <ul>
            <li>MCA – [Your University Name]</li>
            <li>BSc – [Your University Name]</li>
          </ul>
        </div>
      </div>

      <div className="row about-content about-buttons" data-aos="fade-up">
        <div className="column large-half tab-full">
          <a href="/cv.pdf" className="btn btn--primary full-width" download>
            Download CV
          </a>
        </div>
        <div className="column large-half tab-full">
          <a href="#contact" className="btn full-width smoothscroll">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
