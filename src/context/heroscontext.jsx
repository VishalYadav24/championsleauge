import { createContext, useState } from "react";


 const HerosContext = createContext();

const HerosProvider = ({children})=>{
    const [favoriteHero,setFavoriteHero] = useState([]);
    const addHero = (value)=>{
      setFavoriteHero((prev)=>{return [...prev,value]})
    }
    return (
        <HerosContext.Provider value={{favoriteHero,setFavoriteHero,addHero}} >{children}</HerosContext.Provider>
    )
}

export {HerosContext,HerosProvider}