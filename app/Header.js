"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import HoverCard from "./HoverCard";

const LordIcon = dynamic(() => import("./LordIconWrapper"), { ssr: false });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);

  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.lordicon.com/ritcuqlt.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.lordicon.com/ritcuqlt.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // بلاک کردن اسکرول پس‌زمینه وقتی مودال باز است
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  async function handleShowMore() {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const data = await res.json();
    if (data.drinks && data.drinks[0]) {
      setSelectedDrink(data.drinks[0]);
      setModalOpen(true);
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">
      {/* ویدیو بک‌گراند */}
      <video autoPlay muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 min-h-screen">
        <source src="/header.mp4" type="video/mp4" />
      </video>

      {/* منو */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center m-6 sm:m-10 relative z-20 gap-6 sm:gap-0">
        <div onClick={() => setMenuOpen(prev => !prev)} className="flex items-center gap-2 cursor-pointer">
          <p className="text-lg">Menu</p>
          <LordIcon src="https://cdn.lordicon.com/izqdfqdl.json" trigger="hover" colors="primary:#ffffff" style={{ width: "30px", height: "30px" }} />
        </div>
        <div>
          <img className="h-16 sm:h-25" src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/5a306c1a3a97ec60574529e55ae12e655bc872e0/original/bs-logo-2022-flat-72.png" alt="Logo" />
        </div>
        <div className="flex justify-center items-center gap-2 hover:text-amber-400 transition">
          <p>account</p>
          <LordIcon src="https://cdn.lordicon.com/cniwvohj.json" trigger="hover" colors="primary:#ffffff" style={{ width: "30px", height: "30px" }} />
        </div>
      </div>

      {/* متن وسط صفحه */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
        className="absolute top-[60%] left-4 sm:left-[20%] transform -translate-y-1/2 z-10 max-w-xs sm:max-w-md text-center sm:text-left px-2">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">Refresher Exotic</h1>

        <div className="flex justify-center sm:justify-start mb-3">
          <button onClick={handleShowMore} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-full shadow-lg transition">
            Show More
            <LordIcon src="https://cdn.lordicon.com/wjogzler.json" trigger="hover" colors="primary:#ffffff" style={{ width: "30px", height: "30px" }} />
          </button>
        </div>

        <p className="text-gray-300 leading-relaxed drop-shadow-lg text-sm sm:text-base">
          A non alcoholic carbonated, refreshing drink, with the flavor of natural exotic fruits...
        </p>
      </motion.div>

<AnimatePresence>
  {modalOpen && selectedDrink && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModalOpen(false)}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full flex flex-col md:flex-row gap-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* دکمه ضربدر */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-red-600 cursor-pointer z-50"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* عکس نوشیدنی */}
        <img
          src={selectedDrink.strDrinkThumb}
          alt={selectedDrink.strDrink}
          className="rounded-xl w-full md:w-1/2 object-cover shadow-lg"
          style={{ maxHeight: "300px" }}
        />

        {/* اطلاعات نوشیدنی */}
        <div className="flex flex-col justify-between md:w-1/2">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">{selectedDrink.strDrink}</h2>
          <p><strong>Category:</strong> {selectedDrink.strCategory}</p>
          <p><strong>Type:</strong> {selectedDrink.strAlcoholic}</p>
          <p><strong>Glass:</strong> {selectedDrink.strGlass}</p>

          <h3 className="mt-4 font-semibold text-amber-900">Ingredients:</h3>
          <ul className="list-disc list-inside max-h-32 overflow-auto text-amber-800">
            {Array.from({ length: 15 }).map((_, i) => {
              const ingredient = selectedDrink[`strIngredient${i + 1}`];
              const measure = selectedDrink[`strMeasure${i + 1}`];
              if (ingredient) {
                return (
                  <li key={i}>
                    {measure ? measure.trim() + " " : ""}
                    {ingredient}
                  </li>
                );
              }
              return null;
            })}
          </ul>

          <p className="mt-4 text-gray-600 italic text-sm">
            {selectedDrink.strInstructions}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>





    </div>
  );
}
