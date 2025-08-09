import React from "react";

export default function Footer() {
  return (
    <footer className="s-footer h-dark-bg">
      <div className="row s-footer__main">
        <div className="column large-4 medium-6 tab-12 s-footer__info">
          <h5>About Me</h5>
          <p>
            I’m George K Saji, a Full-Stack Developer passionate about building
            scalable, user-focused applications using modern technologies.
          </p>
        </div>

        <div className="column large-2 medium-3 tab-6 s-footer__site-links">
          <h5>Site Links</h5>
          <ul>
            <li><a className="smoothscroll" href="#hero">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#services">Projects</a></li>
            <li><a className="smoothscroll" href="#portfolio">Certifications</a></li>
          </ul>
        </div>

        <div className="column large-2 medium-3 tab-6 s-footer__social-links">
          <h5>Follow</h5>
          <ul>
            <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>

        <div className="column large-4 medium-12 s-footer__subscribe">
          <h5>Contact</h5>
          <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
        </div>
      </div>

      <div className="row s-footer__bottom">
        <div className="column large-full ss-copyright">
          <span>© {new Date().getFullYear()} George K Saji</span>
          <span>Design by <a href="https://yoursite.com">Your Name</a></span>
        </div>

        <div className="ss-go-top">
          <a className="smoothscroll" href="#top" title="Back to Top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-8 8h6v8h4v-8h6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
