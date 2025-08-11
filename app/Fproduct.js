"use client";

import React, { useRef } from "react";

export default function Fproduct() {
  const videos = [
    { src: "/n1.mp4", desc:"Rose, Bitter Orange",sub:"What's better than one bottle of Figlia? The answer is two! Yours and Mine. Always bring an extra bottle." },
    { src: "/n2.mp4", desc: "Fiore Frizzante" ,sub:"Derived from Figlia's Fiore, this single-use, booze-free sparkling sip brings effervescent bubbles and an extra squeeze of lemon "},
    { src: "/n3.mp4", desc: "Daughter Tote" ,sub:"Our hero non-alcoholic aperitivo, Fiore bottles the lushness of Italian gardens and the energy of sidewalk dinners in New York City. "},
  ];

  const videoRefs = useRef([]);

  const handleMouseEnter = (idx) => {
    videoRefs.current[idx]?.play();
  };

  const handleMouseLeave = (idx) => {
    videoRefs.current[idx]?.pause();
    if (videoRefs.current[idx]) videoRefs.current[idx].currentTime = 0;
  };

  return (
    <div className="w-full mx-auto p-10 bg-orange-200 rounded-lg shadow-lg">
        <p className="text-center text-black font-bold text-3xl m-10">Popular Drinks</p>
      <div className="flex justify-center gap-16">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="flex flex-col h-[500px] items-center cursor-pointer group 
                       bg-orange-200 rounded-lg shadow-lg p-6
                       transition-colors duration-500 ease-in-out
                       hover:bg-black
                       w-[280px] "
          >
            <video
              ref={(el) => (videoRefs.current[idx] = el)}
              muted
              playsInline
              preload="metadata"
              className="w-[260px] h-[260px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <p className="mt-10 text-center text-gray-800 text-xl font-semibold transition-all duration-500 ease-in-out group-hover:text-white">
              {video.desc}
            </p>
            <p className="text-center m-3 text-gray-400">{video.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
