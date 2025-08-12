"use client";

import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

export default function Fproduct() {
  const videos = [
    {
      src: "/n1.mp4",
      desc: "Rose, Bitter Orange",
      sub: "What's better than one bottle of Figlia? The answer is two! Yours and Mine. Always bring an extra bottle.",
    },
    {
      src: "/n2.mp4",
      desc: "Fiore Frizzante",
      sub: "Derived from Figlia's Fiore, this single-use, booze-free sparkling sip brings effervescent bubbles and an extra squeeze of lemon ",
    },
    {
      src: "/n3.mp4",
      desc: "Daughter Tote",
      sub: "Our hero non-alcoholic aperitivo, Fiore bottles the lushness of Italian gardens and the energy of sidewalk dinners in New York City. ",
    },
  ];

  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.lordicon.com/ritcuqlt.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.lordicon.com/ritcuqlt.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const playVideo = (idx) => {
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].play();
      setPlayingIndex(idx);
    }
  };

  const pauseVideo = (idx) => {
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].pause();
      videoRefs.current[idx].currentTime = 0;
      if (playingIndex === idx) setPlayingIndex(null);
    }
  };

  // فقط یک ویدیو همزمان پخش شود
  const handleMouseEnter = (idx) => {
    if (playingIndex !== null && playingIndex !== idx) {
      pauseVideo(playingIndex);
    }
    playVideo(idx);
  };

  const handleMouseLeave = (idx) => {
    pauseVideo(idx);
  };

  // برای موبایل: با تاچ ویدیو پلی/پاز شود
  const handleVideoClick = (idx) => {
    if (playingIndex === idx) {
      pauseVideo(idx);
    } else {
      if (playingIndex !== null) pauseVideo(playingIndex);
      playVideo(idx);
    }
  };

  return (
    <div
      className="w-full mx-auto p-6 md:p-10 rounded-lg shadow-lg"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,165,0,0.9) 60%, transparent 50%), url('/dd.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <p className="text-center text-white font-bold text-3xl mb-10">Popular Drinks</p>
      <div className="flex flex-wrap justify-center gap-10">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center cursor-pointer group
              bg-orange-200 rounded-lg shadow-lg p-6
              transition-colors duration-500 ease-in-out
              hover:bg-black w-[280px] md:w-[320px]`}
          >
            <video
              ref={(el) => (videoRefs.current[idx] = el)}
              muted
              playsInline
              preload="metadata"
              className={`w-[260px] h-[260px] md:w-[300px] md:h-[300px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${
                playingIndex === idx ? "scale-110" : "group-hover:scale-110"
              }`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onClick={() => handleVideoClick(idx)}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <p
              className={`mt-8 text-center text-xl font-semibold transition-all duration-500 ease-in-out ${
                playingIndex === idx ? "text-white" : "text-gray-800 group-hover:text-white"
              }`}
            >
              {video.desc}
            </p>
            <p className="text-center mt-2 mb-4 text-gray-400 text-sm md:text-base">{video.sub}</p>
          </div>
        ))}

        {/* دکمه Shop ALL */}
        <Link href="/product">
        <div
          className="flex flex-col items-center justify-center cursor-pointer
          w-[280px] md:w-[320px] text-white select-none"
          >
          <p className="font-bold text-xl mb-4">Shop ALL</p>
          <lord-icon
            src="https://cdn.lordicon.com/ircnfpus.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "150px", height: "150px" }}
            ></lord-icon>
        </div>
            </Link>
      </div>
    </div>
  );
}
