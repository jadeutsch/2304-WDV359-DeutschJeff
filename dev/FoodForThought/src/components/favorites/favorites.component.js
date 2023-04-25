import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext();
  return (
    <FavoriteButton>
      <AntDesign name="heart" size={24} color="red" />
    </FavoriteButton>
  );
};
