import React, { useContext, useEffect, useState } from 'react';
import HeroList from '../features/HeroList';
import { searchHeroes } from '../utils/SuperheroAPI';
import SearchContext from '../utils/SearchContext';
import HeroContext from '../utils/HeroContext';

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
      {categories?.map(item => (
        <div className="">
          <HeroList race={item} heroes={filterHeroByRaceAndSearch(heros, item, searchTerm)} />
        </div>
      ))}
    </>
  );
};

export default Home;
