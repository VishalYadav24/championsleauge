import { createContext, useState } from "react";

const HerosContext = createContext();

const HerosProvider = ({ children }) => {
  const [favoriteHero, setFavoriteHero] = useState([]);
  const [isHeroPresent, setIsHeroPresent] = useState([]);
  const addHero = (value) => {
    setFavoriteHero((prev) => {
      if (prev && prev.includes(value)) {
        return [...prev];
      } else {
        setIsHeroPresent((prev)=> [...prev,value?.id])
        return [...prev, value];
      }
    });
  };
  const checkIsHeroPresent = (id) => {
    return isHeroPresent?.includes(id) ? true : false;
  };
  const handleRemoveRecord = (id)=>{
    setFavoriteHero((prev)=> prev.filter(data=> data.id !== id));
    setIsHeroPresent((prev)=> prev.filter(data=> data !== id));
   }
  return (
    <HerosContext.Provider
      value={{
        favoriteHero,
        setFavoriteHero,
        addHero,
        checkIsHeroPresent,
        isHeroPresent,
        setIsHeroPresent,
        handleRemoveRecord
      }}
    >
      {children}
    </HerosContext.Provider>
  );
};

export { HerosContext, HerosProvider };
