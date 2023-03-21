import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroContext from '../utils/HeroContext';

const RelativeList = ({ relatives, heroes }) => {
  const { heros } = useContext(HeroContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const findHeroByName = name => {
    console.log('name', name);
    return heros?.find(hero => hero.name.toLowerCase() === name.toLowerCase());
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-white mb-4">Relatives {relatives}</h2>
      <Slider {...settings}>
        {relatives?.map(relative => {
          const hero = findHeroByName(relative);
          if (!hero) return null;
          return (
            <div key={hero.id} className="px-1">
              <Link to={`/hero/${hero.id}`}>
                <img
                  src={hero.images.sm}
                  alt={hero.name}
                  className="rounded-lg w-40 h-60 object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
                />
                <div className="text-white text-center mt-2">{hero.name}</div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default RelativeList;
