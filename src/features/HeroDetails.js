import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroPage from '../pages/HeroPage';
import { getHero } from '../utils/SuperheroAPI';

const HeroDetails = ({ heroes }) => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function fetchHero() {
      const fetchedHero = await getHero(id);
      setHero(fetchedHero);
    }

    fetchHero();
  }, [id]);

  if (!hero) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <HeroPage hero={hero} />
    </>
  );
};

export default HeroDetails;
