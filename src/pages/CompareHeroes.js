import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import HeroContext from '../utils/HeroContext';

const CompareHeroes = () => {
  const { heros } = useContext(HeroContext);
  const { heroId1, heroId2 } = useParams();
  const hero1 = heros?.find(hero => hero.id === parseInt(heroId1));
  const hero2 = heros?.find(hero => hero.id === parseInt(heroId2));

  const attributes = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];

  return (
    <div className="flex">
      <div className="w-1/2">
        <h2 className="text-2xl text-white mb-4">{hero1.name}</h2>
        <ul>
          {attributes.map(attribute => (
            <li key={`${hero1.id}-${attribute}`} className="text-white mb-2">
              {attribute.charAt(0).toUpperCase() + attribute.slice(1)}: {hero1.powerstats[attribute]}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl text-white mb-4">{hero2.name}</h2>
        <ul>
          {attributes.map(attribute => (
            <li key={`${hero2.id}-${attribute}`} className="text-white mb-2">
              {attribute.charAt(0).toUpperCase() + attribute.slice(1)}: {hero2.powerstats[attribute]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompareHeroes;
