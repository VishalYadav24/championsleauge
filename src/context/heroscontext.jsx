import { createContext, useState } from "react";


 const HerosContext = createContext();

const HerosProvider = ({children})=>{
    const [favoriteHero,setFavoriteHero] = useState([]);
    return (
        <HerosContext.Provider value={{favoriteHero,setFavoriteHero}} >{children}</HerosContext.Provider>
    )
}

export {HerosContext,HerosProvider}