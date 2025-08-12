"use client";

import React from "react";

export default function NutritionCard() {
  return (
    <div
      className="relative w-full h-[500px] flex flex-col items-center justify-end px-6 md:px-20 pb-10"
      style={{
        backgroundImage: "url('/cc.webp')",
        backgroundSize: "contain", // بهتره "contain" یا "cover" باشه که ریسپانسیو تر باشه
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#e8ddca",
      }}
    >
      {/* متن بالا سمت چپ */}
      <div className="absolute top-10 left-6 md:left-20 space-y-4 max-w-xs md:max-w-md">
        <p className="text-[#523122] font-bold text-4xl md:text-5xl leading-tight">
          It still does
        </p>
        <div
          className="bg-[#a26833] px-6 py-2 inline-block"
          style={{ transform: "rotate(-4deg)" }}
        >
          <p className="text-[#e8ddca] font-bold text-6xl md:text-7xl leading-none">
            body good
          </p>
        </div>
      </div>

      {/* باکس اطلاعات پایین */}
      <div
        className="bg-[#e8ddca] bg-opacity-70 text-[#523122] border border-[#faeade] flex gap-6 px-6 py-4 rounded-3xl mb-6 shadow-2xl backdrop-blur-sm max-w-md w-full justify-around"
      >
        {[
          { value: "20g", label: "Protein" },
          { value: "250", label: "Calories" },
          { value: "15g", label: "Fat" },
          { value: "30g", label: "Carbs" },
        ].map(({ value, label }, i) => (
          <React.Fragment key={label}>
            <div className="text-center">
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm">{label}</p>
            </div>
            {i < 3 && <div className="w-[1px] bg-gray-400 self-center" style={{ height: '40px' }}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
