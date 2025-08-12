"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const content = {
  option1: {
    backgroundImg: "/dd.jpg",
    overlayImg: "https://robertassociety.com/wp-content/uploads/2025/04/Frame-27-1.png",
    title: "WELCOME",
    text: `Robertas Society is a place to stay, eat, and gather.
Housed in a former library from the 1930s, we've kept the
character and filled it with new energy...`
  },
  option2: {
    backgroundImg: "/22.jpg",
    overlayImg: "https://robertassociety.com/wp-content/uploads/2025/04/Frame-27-1.png",
    title: "ABOUT US",
    text: `This is the about us section. Here you can put any content
you want to show when option 2 is selected.`,
  },
  option3: {
    backgroundImg: null,
    overlayImg: null,
    title: "CONTACT",
    text: "",
  }
}

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }
}

export default function Main() {
  const [selected, setSelected] = useState('option1')

  const { backgroundImg, overlayImg, title, text } = content[selected]

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-tr from-[#bb7873] to-[#d9a690]">
      {/* سمت چپ - منو */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-6 p-6 md:p-10 text-white">
        {Object.keys(content).map(key => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`
              text-lg md:text-2xl font-semibold p-3 md:p-4 rounded-lg cursor-pointer transition
              shadow-md
              ${selected === key
                ? 'bg-amber-500 text-black shadow-lg scale-105'
                : 'hover:bg-orange-300 hover:scale-105'}
              focus:outline-none focus:ring-4 focus:ring-amber-300
            `}
          >
            {content[key].title}
          </button>
        ))}
      </div>

      {/* سمت راست - محتوا */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative p-4 md:p-0">
        <AnimatePresence mode="wait" exitBeforeEnter>
          <motion.div
            key={selected}
            className="relative max-w-full md:max-w-lg"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {selected === 'option3' ? (
              <div className="flex flex-wrap gap-6 justify-center text-4xl md:text-5xl text-black select-none">
                <p className="w-full text-center mb-4 md:mb-0 font-semibold">Connect to Us</p>
                <FontAwesomeIcon icon={faInstagram} className="hover:scale-110 transition-transform cursor-pointer" />
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-110 transition-transform cursor-pointer" />
                <FontAwesomeIcon icon={faFacebook} className="hover:scale-110 transition-transform cursor-pointer" />
                <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110 transition-transform cursor-pointer" />
              </div>
            ) : (
              <>
                <img
                  className="w-48 md:w-96 rounded shadow-lg mx-auto md:mx-0"
                  src={backgroundImg}
                  alt="Background"
                  style={{ transform: 'rotate(-8deg)' }}
                />
                <div
                  style={{ transform: 'rotate(15deg)' }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-44 md:w-60 h-72 md:h-96 opacity-90 border-4 border-white rounded overflow-hidden shadow-2xl"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={overlayImg}
                    alt="Overlay"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center text-black px-4 md:px-6 text-center drop-shadow-lg">
                    <h2 className="font-bold text-2xl md:text-3xl mb-2">{title}</h2>
                    <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line">{text}</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
