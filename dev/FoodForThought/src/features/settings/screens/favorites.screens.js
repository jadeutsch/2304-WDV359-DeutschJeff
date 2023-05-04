import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { EmptyFavorites, FavoritesList } from "../components/favorites.screens.styles";

import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { Typography } from "../../../components/typography/text.component";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <FavoritesList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <EmptyFavorites>
      <Typography>No Favorites Yet</Typography>
    </EmptyFavorites>
  );
};
