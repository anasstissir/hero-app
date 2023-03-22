import React from 'react';
import { Link } from 'react-router-dom';
import HeroCard from '../components/HeroCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HeroList = ({ heroes, race }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
    },
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      {heroes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{race || 'N/A'}</h2>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all 1s ease"
            transitionDuration={1000}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {heroes?.map(hero => (
              <div key={hero.id}>
                <Link to={`/hero/${hero.id}`}>
                  <HeroCard hero={hero} />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default HeroList;
