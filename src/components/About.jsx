import React from "react";
import ShinyText from "./ShinyText/ShinyText.jsx";
import ScrollFloat from "./ScrollFloat/ScrollFloat.jsx";

export default function About() {
  return (
    // <section id="about" className="s-about  target-section">
    <section
      id="about"
      className="row target-section"
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        paddingBlock: "15rem",
      }}
      data-parallax="scroll"
    >
      <div className="row about-content">
        <div className="column large-full">
          <ShinyText
            text="About Me"
            disabled={false}
            speed={3}
            className="custom-class text-5xl mb-5"
          />
          <br />
        </div>
        <div className="rounded-2xl w-full text-white flex flex-col justify-between items-center px-8 py-0">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            {/* <span className="about-label-text"> */}
            Hi, I’m George K Saji, a postgraduate student in Computer
            Applications with a strong passion for software development and web
            technologies. I enjoy building practical solutions that combine
            creativity with functionality, and I’m always eager to explore new
            tools and frameworks. My journey so far has given me hands-on
            experience with C, C++, Python, Java, Laravel, Django, PHP, MySQL,
            and PostgreSQL, along with frontend technologies like HTML, CSS, and
            JavaScript. On GitHub, you’ll find projects such as an e-commerce
            store (ShopMyHome), a job listing portal (MeraNaukri), and a
            real-time weather app (WeatherBook)—each reflecting my interest in
            solving real-world problems through code. I also had the opportunity
            to work as an IT & Sales Intern at Revstar Solutions, where I
            developed and deployed their official website, focusing on
            performance optimization and SEO. I consider myself a curious
            learner and a collaborative teammate who values punctuality,
            adaptability, and continuous improvement. My goal is to grow as a
            full-stack developer while contributing to meaningful projects that
            create impact.
            {/* </span> */}
          </ScrollFloat>
        </div>
      </div>
    </section>
  );
}
