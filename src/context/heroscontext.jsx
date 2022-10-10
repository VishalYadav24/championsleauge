import { createContext, useState } from "react";


 const HerosContext = createContext();

const HerosProvider = ({children})=>{
    const [favoriteHero,setFavoriteHero] = useState([]);
    const addHero = (value)=>{
      
      setFavoriteHero((prev) =>{
        if(prev && prev.includes(value)){
          return [...prev]
        }else{
          return [...prev,value];
        }
        
      })
    }
    return (
        <HerosContext.Provider value={{favoriteHero,setFavoriteHero,addHero}} >{children}</HerosContext.Provider>
    )
}

export {HerosContext,HerosProvider}