import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (restaurant) => {
    setFavorites(...favorites, restaurant);
  };
  const removeFavorite = (restaurant) => {
    const newFavorites = favorites.filter((x) => x.placeId !== restaurant.placeId);
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: addFavorite,
        removeFromFavorites: removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
