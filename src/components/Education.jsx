import React from "react";
import ShinyText from "./ShinyText/ShinyText";
import CertificatesStack from "./CertificatesStack";

export default function Education() {
  return (
    <section
      id="about"
      className="row target-section relative z-20 h-screen flex items-center px-6"
      data-parallax="scroll"
    >
      <div className="w-full flex flex-col">
        {/* Left column */}
        <div className="large-full mb-10 md:mb-30">
          <ShinyText
            text="About Me"
            disabled={false}
            speed={3}
            className="custom-class text-5xl mb-8"
          />
          <br />
        </div>
        {/* Timeline: alternate left/right */}
        <div className="flex-1 flex flex-col justify-center relative">
          {/* Vertical line centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#b6b6b6] opacity-40 -translate-x-1/2" />
          <div className="w-full flex flex-col gap-16">
            {/* MCA - left */}
            <div className="flex w-full items-start relative">
              <div className="flex-1 flex flex-col items-end pr-12">
                <span className="text-[#b6b6b6] text-lg">2023 - present</span>
                <h2 className="text-2xl text-[#b6b6b6] font-semibold mt-1 text-right about-label-text">
                  Master of Computer Applications (MCA)
                </h2>
                <div className="text-[#b6b6b6] text-base mb-2 text-right about-label-text">
                  Rajagiri College of Social Sciences, Kalamassery
                </div>
              </div>
              <div className="w-1/12 flex flex-col items-center relative z-10">
                {/* Timeline dot overlays vertical line */}
                <div className="bg-[#e2b6b0] rounded-full border-2 border-[#b6b6b6] w-4 h-4" />
              </div>
              <div className="flex-1" />
            </div>
            {/* BCA - right */}
            <div className="flex w-full items-start relative">
              <div className="flex-1" />
              <div className="w-1/12 flex flex-col items-center relative z-10">
                <div className="bg-[#e2b6b0] rounded-full border-2 border-[#b6b6b6] w-4 h-4" />
              </div>

              <div className="flex-1 flex flex-col items-start pl-12">
                <span className="text-[#b6b6b6] text-lg">2020 - 2023</span>
                <h2 className="text-2xl text-[#b6b6b6] font-semibold mt-1 about-label-text">
                  Bachelor of Computer Applications (BCA)
                </h2>
                <div className="text-[#b6b6b6] text-base mb-2 about-label-text">
                  Rajagiri College of Social Sciences, Kalamassery
                </div>
                {/* <p className="text-[#b6b6b6] max-w-lg">
                  Graduated with a strong foundation in programming, algorithms, and database management. Participated in various tech fests and coding competitions.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
