"use client";

import React from "react";

export default function NutritionCard() {
  return (
    <div
      className="relative  w-full h-[500px] flex items-end justify-center"
      style={{
        backgroundImage: "url('/cc.webp')", 
        backgroundSize: "1000px", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#e8ddca", 
      }}
    >
        <div className="top-25 left-30 absolute">
            <div>

            <p className="text-[#523122] font-bold text-5xl">It still does</p>
            </div>
            <div className="bg-[#a26833] p-4"
                  style={{ transform: 'rotate(-4deg)' }}>
            <p className="text-[#e8ddca] font-bold text-7xl">body good</p>
            </div>
        </div>
      {/* باکس اطلاعات */}
      <div className=" bg-opacity-70 text-[#523122] border-[#faeade] flex gap-8 px-10 py-4 rounded-4xl mb-6 shadow-2xl bg-[#e8ddca] backdrop-blur-sm">
        <div className="text-center">
          <p className="text-2xl font-bold">20g</p>
          <p className="text-sm text-[#523122]">Protein</p>
        </div>
        <div className="w-[1px] bg-gray-500"></div>
        <div className="text-center">
          <p className="text-2xl font-bold">250</p>
          <p className="text-sm text-[#523122]">Calories</p>
        </div>
        <div className="w-[1px] bg-gray-500"></div>
        <div className="text-center">
          <p className="text-2xl font-bold">15g</p>
          <p className="text-sm text-[#523122]">Fat</p>
        </div>
        <div className="w-[1px] bg-gray-500"></div>
        <div className="text-center">
          <p className="text-2xl font-bold">30g</p>
          <p className="text-sm text-[#523122]">Carbs</p>
        </div>
      </div>
    </div>
  );
}
