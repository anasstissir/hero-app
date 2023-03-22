import React, { useState } from 'react';

const HeroCard = ({ hero }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg w-48 h-72">
      <img
        src={hero.images.md}
        alt={hero.name}
        className="w-full h-full rounded-lg object-cover object-center shadow-md transform hover:shadow-xl hover:scale-110 transition-all duration-300 origin-center"
      />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg" />
      <div className="absolute bottom-0 left-0 w-full h-16 flex items-end justify-between p-2 text-white">
        <span className="font-semibold text-lg md:text-xl transform transition-all duration-300 group-hover:translate-y-[-8] group-hover:text-2xl">
          {hero.name}
        </span>
      </div>

      <div className="absolute inset-0 w-full h-full bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default HeroCard;
