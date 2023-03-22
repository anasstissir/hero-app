import React, { useContext, useEffect, useState } from 'react';
import HeroList from '../features/HeroList';
import { searchHeroes } from '../utils/SuperheroAPI';
import SearchContext from '../utils/SearchContext';
import HeroContext from '../utils/HeroContext';
import allHero from '../assets/all.jpeg';

const Home = ({}) => {
  const [categories, setCategories] = useState([]);

  const { searchTerm } = useContext(SearchContext);
  const { heros, setHeros } = useContext(HeroContext);

  async function fetchAllHeroes() {
    const searchedHeroes = await searchHeroes();
    const races = searchedHeroes.reduce((acc, current) => {
      acc.push(current.appearance.race);
      return acc;
    }, []);
    const racesSet = new Set(races);
    setCategories(Array.from(racesSet));
    setHeros(searchedHeroes);
  }

  useEffect(() => {
    fetchAllHeroes();
  }, []);

  const filterHeroByRaceAndSearch = (heroList = [], race, search = '') => {
    return heroList.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase())).filter(hero => hero.appearance.race === race);
  };

  return (
    <>
      <div className="w-full min-h-screen relative">
        <img src={allHero} alt="Superheroes" className="w-full h-full object-cover filter blur-md" />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-10 text-white">WikiHero</h1>

          <div className="w-11/12 md:w-1/2 p-4">
            <p className="text-md md:text-xl leading-relaxed text-white text-center">
              An application that brings together the world's most extraordinary superheroes under one digital roof. Unleash your inner fan
              and immerse yourself in an extensive collection of profiles showcasing each hero's unique abilities, origin stories, and
              strengths.
            </p>
          </div>
        </div>
      </div>
      {categories?.map(item => (
        <div className="">
          <HeroList race={item} heroes={filterHeroByRaceAndSearch(heros, item, searchTerm)} />
        </div>
      ))}
    </>
  );
};

export default Home;
