"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="relative w-full text-white font-sans min-h-screen flex flex-col">
      {/* هدر همیشه بالا */}
      <div className="z-20 flex flex-col sm:flex-row items-center justify-between px-6 py-8 bg-black bg-opacity-60 text-white font-sans sticky top-0">
        {/* لوگو وسط */}
        <div className="order-2 sm:order-2">
          <img
            className="h-12 sm:h-16"
            src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/5a306c1a3a97ec60574529e55ae12e655bc872e0/original/bs-logo-2022-flat-72.png"
            alt="Logo"
          />
        </div>

        {/* دکمه منو موبایل */}
        <button
          className="order-1 sm:hidden m-2 flex items-center gap-2 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <p className="text-lg font-semibold">Menu</p>
          <LordIcon
            src="https://cdn.lordicon.com/izqdfqdl.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: 30, height: 30 }}
          />
        </button>

        {/* منوی دسکتاپ */}
        <nav className="hidden sm:flex order-3 gap-10 font-semibold">
          <a href="#" className="hover:text-amber-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-amber-400 transition">
            About
          </a>
          <a href="#" className="hover:text-amber-400 transition">
            Contact
          </a>
        </nav>

        {/* حساب کاربری */}
        <div className="order-4 flex items-center m-2 gap-2 hover:text-amber-400 transition cursor-pointer">
          <p className="hidden sm:block font-medium">Account</p>
          <LordIcon
            src="https://cdn.lordicon.com/cniwvohj.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: 30, height: 30 }}
          />
        </div>
      </div>

      {/* ویدیو پس‌زمینه - موبایل با ارتفاع کمتر */}
      <video
        autoPlay
        muted
        playsInline
        className="w-full object-cover sm:absolute sm:top-0 sm:left-0 sm:w-full sm:h-full sm:min-h-screen"
        style={{ height: "200px" }} // موبایل کوتاه‌تر
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>

      {/* متن وسط صفحه و دکمه */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="z-10 max-w-xs sm:max-w-md mx-auto sm:mx-0 text-center sm:text-left px-2 mt-4 sm:absolute sm:top-[60%] sm:left-[20%] sm:transform sm:-translate-y-1/2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
          Refresher Exotic
        </h1>

        <div className="flex justify-center sm:justify-start mb-3">
          <button
            onClick={handleShowMore}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-full shadow-lg transition"
          >
            Show More
            <LordIcon
              src="https://cdn.lordicon.com/wjogzler.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>

        <p className="text-gray-300 leading-relaxed drop-shadow-lg text-sm sm:text-base">
          A non alcoholic carbonated, refreshing drink, with the flavor of natural
          exotic fruits...
        </p>
      </motion.div>

      {/* منوی موبایل بازشونده */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden bg-black bg-opacity-90 shadow-lg rounded-b-lg p-4 flex flex-col gap-4 z-30 mt-4"
          >
            <a
              href="#"
              className="text-white hover:text-amber-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-400 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* مودال نمایش نوشیدنی */}
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
              style={{ maxHeight: "90vh", overflowY: "auto" }}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-red-600 cursor-pointer z-50"
                aria-label="Close modal"
              >
                &times;
              </button>

              <img
                src={selectedDrink.strDrinkThumb}
                alt={selectedDrink.strDrink}
                className="rounded-xl w-full md:w-1/2 object-cover shadow-lg"
                style={{ maxHeight: "300px" }}
              />

              <div className="flex flex-col justify-between md:w-1/2">
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  {selectedDrink.strDrink}
                </h2>
                <p>
                  <strong>Category:</strong> {selectedDrink.strCategory}
                </p>
                <p>
                  <strong>Type:</strong> {selectedDrink.strAlcoholic}
                </p>
                <p>
                  <strong>Glass:</strong> {selectedDrink.strGlass}
                </p>

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
