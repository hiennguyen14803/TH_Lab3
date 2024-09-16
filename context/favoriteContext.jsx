import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    // them favorite
    const addFavorite = (contact) => {
        setFavorites((prevFavorites) => {
            if(prevFavorites.some(fav => fav.phone === contact.phone)){
                return prevFavorites.filter(fav => fav.phone !== contact.phone);
            }
            return [...prevFavorites, contact];
        });
    };

    return (
        <FavoriteContext.Provider value={{favorites, addFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
};