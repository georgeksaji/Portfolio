import React from "react";

export default function Education() {
  return (
    <section id="education" className="s-education target-section min-h-screen flex flex-col items-center justify-center bg-[#183233] py-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Left column */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-light italic text-white mb-2 inline-block pb-2">Education</h1>
          {/* <p className="text-[#b6b6b6] mt-6 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p> */}
          {/* Certificatess box */}
          <div className="bg-[#e2b6b0] text-[#183233] rounded-md p-6 mt-8 max-w-md">
            <h3 className="text-lg font-semibold mb-2">Awards</h3>
            <hr className="border-[#b6b6b6] mb-2" />
            <div className="mb-1">2019 - DESIGN Magazine, Site of the Month</div>
            <div>2015 - Innovative Design of the Year</div>
          </div>
        </div>
        {/* Timeline: alternate left/right */}
        <div className="flex-1 flex flex-col justify-center relative">
          {/* Vertical line centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#b6b6b6] opacity-40 -translate-x-1/2" />
          <div className="w-full flex flex-col gap-16">
            {/* MCA - left */}
            <div className="flex w-full items-start relative">
              <div className="flex-1 flex flex-col items-end pr-12">
                <span className="text-[#b6b6b6] text-lg">2023 - Present</span>
                <h2 className="text-2xl text-white font-semibold mt-1 text-right">Master of Computer Applications (MCA)</h2>
                <div className="text-[#b6b6b6] text-base mb-2 text-right">Rajagiri College of Social Sciences, Kalamassery</div>
                {/* <p className="text-[#b6b6b6] max-w-lg text-right">
                  Pursuing MCA with a focus on full-stack development, web technologies, and software engineering. Coursework includes advanced programming, databases, and project management.
                </p> */}
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
                <h2 className="text-2xl text-white font-semibold mt-1">Bachelor of Computer Applications (BCA)</h2>
                <div className="text-[#b6b6b6] text-base mb-2">Rajagiri College of Social Sciences, Kalamassery</div>
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
