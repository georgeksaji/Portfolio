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
        <div className="large-full">
          <ShinyText
            text="About Me"
            disabled={false}
            speed={3}
            className="custom-class text-5xl mb-5"
          />
          <br />
        </div>
        <div className="rounded-2xl w-full text-white flex flex-col justify-between text-justify items-center py-0">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=10%"
            scrollEnd="bottom bottom-=10%"
            stagger={0.03}
          >
            I am currently pursuing my Master of Computer Applications at
            Rajagiri College of Social Sciences, Kalamassery. I also hold a
            Bachelor’s degree in Computer Applications. While frontend is my
            main focus, I have also worked on backend development and SQL
            databases, and I remain comfortable handling them when the project
            demands. I got into development through small HTML projects and
            poster designing, which gradually grew into a passion for building
            web applications. Over the years, I’ve worked on four completed
            projects (with some others in progress) using HTML, CSS, JavaScript,
            PHP, Laravel, Django, SQL, and Bootstrap. I’m currently focusing on
            ReactJS, while also keeping myself updated with industry practices and
            emerging technologies. Alongside academics, I work as a Product
            Engineer (part-time) at Revstar Solutions. My work at Revstar
            includes developing web applications with a strong focus on SEO,
            performance, and design, helping create solutions that are both
            functional and engaging. I consider myself collaborative,
            diplomatic, and punctual, and I aim to contribute to projects where
            teamwork, adaptability, and thoughtful decision-making are valued.
          </ScrollFloat>
        </div>
      </div>
    </section>
  );
}
