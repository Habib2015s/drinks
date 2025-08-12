"use client";

import React, { useState, useEffect } from "react";
import HoverCard from "../HoverCard";
import Footer from "../Footer";

export default function Page() {
  const [drinks, setDrinks] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const listRes = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      const listData = await listRes.json();
      const allCocktails = listData.drinks || [];

      function getRandomItems(arr, n) {
        const result = [];
        const taken = new Set();
        while (result.length < n && result.length < arr.length) {
          const index = Math.floor(Math.random() * arr.length);
          if (!taken.has(index)) {
            taken.add(index);
            result.push(arr[index]);
          }
        }
        return result;
      }

      const selectedCocktails = getRandomItems(allCocktails, 20);

      const detailsPromises = selectedCocktails.map((cocktail) =>
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
        ).then((res) => res.json())
      );
      const detailsResults = await Promise.all(detailsPromises);

      const fullDrinks = detailsResults
        .map((result) =>
          result.drinks && result.drinks[0] ? result.drinks[0] : null
        )
        .filter(Boolean);

      setDrinks(fullDrinks);
    }

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-orange-200 flex flex-col">
      {/* هدر */}
      <header className="bg-orange-500 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            🍹 Cocktails Gallery
          </h1>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 text-sm sm:text-base">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </nav>

          {/* منوی موبایل */}
          <button
            className="md:hidden block text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* لیست منو برای موبایل */}
        {menuOpen && (
          <div className="md:hidden bg-orange-600">
            <ul className="flex flex-col items-center py-3 space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </header>

      {/* محتوای اصلی */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-center text-orange-500 drop-shadow-md">
          Cocktails Gallery
        </h2>

        <ul className="grid animate-fadeDown grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 list-none p-0 overflow-visible">
          {drinks.map((drink) => (
            <li key={drink.idDrink} className="overflow-visible">
              <HoverCard
                drink={drink}
                isActive={activeId === drink.idDrink}
                onHover={() => setActiveId(drink.idDrink)}
                onLeave={() => setActiveId(null)}
              />
            </li>
          ))}
        </ul>
      </main>

      {/* فوتر */}
      <Footer />
    </div>
  );
}
