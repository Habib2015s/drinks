"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.lordicon.com/ritcuqlt.js"]')) {
      const script = document.createElement("script")
      script.src = "https://cdn.lordicon.com/ritcuqlt.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">
      {/* ویدیو بک‌گراند */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>

      {/* منو بالای صفحه */}
      <div className="flex justify-evenly items-center m-10 relative z-20">
        <div
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex items-center gap-2 cursor-pointer select-none "
        >
          <p className="text-lg">Menu</p>
          <lord-icon
            src="https://cdn.lordicon.com/izqdfqdl.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </div>

        <div>
          <img
            className="h-25"
            src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/623852/5a306c1a3a97ec60574529e55ae12e655bc872e0/original/bs-logo-2022-flat-72.png/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.png"
            alt="Logo"
          />
        </div>

        <div className="flex justify-center items-center gap-2 hover:text-amber-400 transition">
          <p>account</p>
          <lord-icon
            src="https://cdn.lordicon.com/cniwvohj.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </div>
      </div>

      {/* منوی کشویی از سمت چپ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 text-white shadow-lg z-30 p-6 flex flex-col gap-4"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-gray-400 hover:text-white mb-4 text-xl font-bold"
              aria-label="Close menu"
            >
              &times;
            </button>
            <a href="#" className="hover:text-amber-400 transition">Home</a>
            <a href="#" className="hover:text-amber-400 transition">About Us</a>
            <a href="#" className="hover:text-amber-400 transition">Products</a>
            <a href="#" className="hover:text-amber-400 transition">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* متن وسط صفحه سمت چپ با انیمیشن */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-2/3 left-[20%] transform -translate-y-1/2 z-10 max-w-md text-center"
      >
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Refresher Exotic</h1>

        <div className="flex justify-center mb-3">
          <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-full shadow-lg transition">
            Show More
            <lord-icon
              src="https://cdn.lordicon.com/wjogzler.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
          </button>
        </div>

        <p className="text-gray-300 leading-relaxed drop-shadow-lg">
          A non alcoholic carbonated, refreshing drink,
          with the flavor of natural exotic fruits, it
          comes to our customers in 0.5L with a shelf
          life of 6 months and 2L with a shelf life of 7
          months.
        </p>
      </motion.div>
    </div>
  )
}
