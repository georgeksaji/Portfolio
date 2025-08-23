import React from "react";
import ShinyText from "./ShinyText/ShinyText";

export default function Education() {
  return (
<section
  id="about"
  className="row target-section relative z-20 h-screen px-6 flex flex-row md:flex-col pt-13"
  data-parallax="scroll"
>
  <div className="w-full">
    <ShinyText
      text="Education"
      disabled={false}
      speed={3}
      className="custom-class text-5xl"
    />
  </div>

  <div className="w-full flex-1 h-2/3 flex md:flex-row gap-8">
    <div className="bg-[#ffffff] rounded-md p-6">
      <h3 className="text-lg mb-2">Certifications</h3>
      <hr className="border-[#b6b6b6] mb-2" />
      <div className="mb-1">2019 - DESIGN Magazine, Site of the Month</div>
      <div>2015 - Innovative Design of the Year</div>
    </div>
    </div>

    {/* Timeline */}
    <div className="flex-1 flex justify-center relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#b6b6b6] opacity-40 -translate-x-1/2" />
      <div className="w-full flex flex-col gap-16">
        {/* MCA */}
        <div className="flex w-full items-start relative mb-8">
          <div className="flex-1 flex flex-col items-end pr-12">
            <span className="text-white text-lg">2023 - present</span>
            <h2 className="text-2xl text-white font-semibold mt-1 text-right about-label-text">
              Master of Computer Applications (MCA)
            </h2>
            <div className="text-white text-base mb-2 text-right about-label-text">
              Rajagiri College of Social Sciences, Kalamassery
            </div>
          </div>
          <div className="w-1/12 flex flex-col items-center relative z-10">
            <div className="bg-[#ffffff] rounded-full w-4 h-4" />
          </div>
          <div className="flex-1" />
        </div>

        {/* BCA */}
        <div className="flex w-full items-start relative">
          <div className="flex-1" />
          <div className="w-1/12 flex flex-col items-center relative z-10">
            <div className="bg-[#ffffff] rounded-full w-4 h-4" />
          </div>
          <div className="flex-1 flex flex-col items-start pl-12">
            <span className="text-white text-lg">2020 - 2023</span>
            <h2 className="text-2xl text-white font-semibold mt-1 about-label-text">
              Bachelor of Computer Applications (BCA)
            </h2>
            <div className="text-white text-base mb-2 about-label-text">
              Rajagiri College of Social Sciences, Kalamassery
            </div>
          </div>
        </div>
      </div>
  </div>
</section>
  );
}
