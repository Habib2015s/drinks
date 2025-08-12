"use client";

import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#faeade] text-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* بخش خبرنامه */}
        <div>
          <h3 className="text-xl font-bold mb-3">10% Off Your First Order</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and stay updated on new products,
            special offers, and healthy lifestyle tips.
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-900 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* بخش توضیحات برند */}
        <div>
          <h3 className="text-xl font-bold mb-3">About Us</h3>
          <p className="text-sm leading-6">
            We create delicious and healthy beverages crafted from the finest
            ingredients. Our mission is to bring you flavors you love while
            keeping your health in mind.
          </p>
        </div>

        {/* بخش شبکه‌های اجتماعی */}
        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <p className="text-sm mb-4">
            Join our community and share your moments with us.
          </p>
          <div className="flex space-x-4 text-lg">
            <a
              href="#"
              className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Healthy Drinks Co. All rights reserved.
      </div>
    </footer>
  );
}
