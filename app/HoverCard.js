"use client";

import React from "react";

export default function HoverCard({ drink, isActive, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative cursor-pointer"
      style={{ height: "320px" }} // ارتفاع ثابت
    >
      <div
        className={`bg-white rounded-xl shadow-md transition-transform duration-300 ease-in-out overflow-hidden relative`}
        style={{
          transform: isActive ? "scale(1.05)" : "scale(1)",
          zIndex: isActive ? 50 : 1,
        }}
      >
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="w-full object-cover h-40"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-amber-950">{drink.strDrink}</h2>
        </div>

        {/* جزئیات با انیمیشن fade + slide */}
        <div
          className={`absolute inset-0 bg-orange-100 bg-opacity-95 p-4 overflow-y-auto transition-all duration-500 ease-in-out`}
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateY(0)" : "translateY(20px)",
            pointerEvents: isActive ? "auto" : "none",
          }}
        >
          <h2 className="text-xl text-amber-950 font-bold mb-2">{drink.strDrink}</h2>
          <p className="text-amber-950"><strong>Category:</strong> {drink.strCategory}</p>
          <p className="text-amber-950"><strong>Type:</strong> {drink.strAlcoholic}</p>
          <p className="text-amber-950"><strong>Glass:</strong> {drink.strGlass}</p>
          <h3 className="mt-2 text-amber-950 font-semibold">Ingredients:</h3>
          <ul className="list-disc list-inside text-amber-950">
            {Array.from({ length: 15 }).map((_, i) => {
              const ingredient = drink[`strIngredient${i + 1}`];
              const measure = drink[`strMeasure${i + 1}`];
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
        </div>
      </div>
    </div>
  );
}
