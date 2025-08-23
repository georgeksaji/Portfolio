import React, { useState } from "react";

const certificates = [
  {
    title: "Site of the Month",
    year: "2019",
    org: "DESIGN Magazine",
    desc: "Awarded for outstanding web design and innovation."
  },
  {
    title: "Innovative Design of the Year",
    year: "2015",
    org: "Creative Awards",
    desc: "Recognized for creative and impactful design solutions."
  },
  // Add more certificates as needed
];

export default function CertificatesStack() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative flex items-end h-48 mt-8 select-none">
      {certificates.map((cert, idx) => {
        // Only show the first card fully if not hovered
        const isActive = hovered === idx;
        const isStacked = hovered === null && idx !== 0;
        return (
          <div
            key={idx}
            className={`absolute transition-all duration-500 ease-in-out cursor-pointer shadow-lg rounded-xl bg-[#e2b6b0] text-[#183233] p-6 w-64 z-${isActive ? 30 : 20 - idx} ${
              isActive
                ? "scale-110 left-1/2 -translate-x-1/2"
                : isStacked
                ? `left-[${2 + idx * 2}rem] scale-95 opacity-70` // stack with offset
                : idx === 0
                ? "left-0 scale-100"
                : "left-0 scale-90 opacity-0 pointer-events-none"
            }`}
            style={{
              boxShadow: isActive
                ? "0 8px 32px 0 rgba(34, 34, 34, 0.25)"
                : "0 2px 8px 0 rgba(34, 34, 34, 0.10)",
              transitionProperty: "left, transform, opacity, box-shadow"
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="font-bold text-lg mb-1">{cert.title}</div>
            <div className="text-sm mb-1">{cert.org}</div>
            <div className="text-xs mb-2 text-[#7a5c5c]">{cert.year}</div>
            <div className="text-sm text-[#183233]">{cert.desc}</div>
          </div>
        );
      })}
    </div>
  );
}
