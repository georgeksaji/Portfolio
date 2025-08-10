
import React from "react";
import { DownloadIcon } from "lucide-react";

export default function ConnectButton({ children, ...props }) {
  return (
    <button
      className="bg-transparent border-0 no-underline group cursor-pointer relative shadow-2xl rounded-xl text-base font-semibold leading-6 text-white inline-block header-resume-btn"
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(226, 231, 233, 0.6)_0%,rgba(56,189,248,0)_75%)] opacity-100 transition-opacity duration-500"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4">
        <span className="group-hover:text-white duration-500 normal-case tracking-normal resume-btn text-2xl font-sans font-semibold leading-6 text-white">
          {children}
        </span>
        <DownloadIcon className="w-14 h-14 resume-btn font-bold group-hover:text-white duration-500" />
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] opacity-0 group-hover:opacity-85 transition-opacity duration-500 group-hover:animate-gradient-move pointer-events-none p-0.4"
        style={{
          background: 'linear-gradient(90deg, #7F00FF 0%, #bf2072ff 25%, #91da12ff 50%, #FFD600 75%, #ffffffff 100%)',
          backgroundSize: '200% 100%'
        }}
      ></span>
    </button>
  );
}
