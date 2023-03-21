import { createContext, useState } from 'react';

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heros, setHeros] = useState([]);

  return <HeroContext.Provider value={{ heros, setHeros }}>{children}</HeroContext.Provider>;
};

export default HeroContext;
