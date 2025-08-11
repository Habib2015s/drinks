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
    overlayImg: "/some-default-overlay.jpg", // یا هر عکس دیگه‌ای
    title: "ABOUT US",
    text: `This is the about us section. Here you can put any content
you want to show when option 2 is selected.`,
  },
  option3: {
    backgroundImg: "/33.jpg", // یک عکس پس‌زمینه مثلا
    overlayImg: null, // آیکون‌ها رو اینجا نمی‌ذاریم چون img src نیاز به رشته داره
    title: "CONTACT",
    text: `Contact us here. You can add phone numbers, email, or a form.`,
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
    <div className="w-full min-h-screen flex">
      {/* سمت چپ - منو */}
      <div className="w-1/2 bg-[#bb7873] flex flex-col justify-center gap-6 p-10 text-white">
        {Object.keys(content).map(key => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`
              text-2xl font-semibold p-4 rounded-lg cursor-pointer transition
              shadow-md
              ${selected === key
                ? 'bg-amber-500 text-black shadow-lg scale-105'
                : 'hover:bg-orange-300 hover:scale-105'}
            `}
          >
            {content[key].title}
          </button>
        ))}
      </div>

      {/* سمت راست - محتوا */}
      <div className="w-1/2 bg-orange-300 flex items-center justify-center">
        <AnimatePresence mode='wait' exitBeforeEnter>
          <motion.div
            key={selected}
            style={{ transform: 'rotate(-8deg)' }}
            className="relative max-w-lg"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* عکس بزرگ (پشتی) */}
            <img
              className="w-96 rounded shadow-lg"
              src={backgroundImg}
              alt="Background"
            />

            {/* اگر گزینه ۳ انتخاب شد، آیکون‌ها رو اینجا نمایش بده */}
            {selected === 'option3' ? (
              <div
                style={{ transform: 'rotate(15deg)' }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-60 h-96 opacity-85 border-4 border-white rounded overflow-hidden shadow-2xl flex flex-col items-center justify-center gap-4 text-black"
              >
                <div className="flex gap-6 text-4xl">
                  <FontAwesomeIcon icon={faInstagram} className="hover:scale-110 transition-transform cursor-pointer" />
                  <FontAwesomeIcon icon={faYoutube} className="hover:scale-110 transition-transform cursor-pointer" />
                  <FontAwesomeIcon icon={faFacebook} className="hover:scale-110 transition-transform cursor-pointer" />
                  <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110 transition-transform cursor-pointer" />
                </div>
                <div className="px-6 text-center">
                  <h2 className="font-bold text-3xl mb-2">{title}</h2>
                  <p className="text-xs leading-snug whitespace-pre-line">{text}</p>
                </div>
              </div>
            ) : (
              /* عکس دوم با متن روی آن - وسط عکس اول */
              <div
                style={{ transform: 'rotate(15deg)' }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-60 h-96 opacity-85 border-4 border-white rounded overflow-hidden shadow-2xl"
              >
                {/* عکس رویی */}
                <img
                  className="w-full h-full object-cover"
                  src={overlayImg}
                  alt="Overlay"
                />

                {/* متن روی عکس بدون بک‌گراند */}
                <div className="absolute inset-0 flex flex-col justify-center text-black px-6 text-center drop-shadow-lg">
                  <h2 className="font-bold text-3xl mb-2">{title}</h2>
                  <p className="text-xs leading-snug whitespace-pre-line">{text}</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
