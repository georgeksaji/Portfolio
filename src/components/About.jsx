import React from "react";

export default function About() {
  return (
    <section id="about" className="s-about target-section">
      <div className="row section-header bit-narrow" data-aos="fade-up">
        <div className="column large-full">
          <h3 className="section-header__pretitle pretitle">About Me</h3>
          <h1 className="section-header__title title">Who am I?</h1>
        </div>
      </div>

      <div className="row about-content" data-aos="fade-up">
        <div className="column large-full about-desc">
          <p>
            I’m George K Saji, a passionate Full-Stack Developer with experience
            in creating scalable, user-centric applications. Skilled in both
            frontend and backend technologies, I enjoy transforming ideas into
            functional and visually appealing products.
          </p>
        </div>
      </div>

      <div className="row about-content about-stats stats block-1-3 block-m-1-2 block-mob-full" data-aos="fade-up">
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

