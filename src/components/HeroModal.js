import React from 'react';

const HeroModal = ({ hero }) => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">{hero.name}</h2>
        <p>{hero.biography.fullName || 'Unknown'}</p>
      </div>
    </div>
  );
};

export default HeroModal;
