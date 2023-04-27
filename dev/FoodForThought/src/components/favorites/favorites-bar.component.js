import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Typography } from "../typography/text.component";

const FavoritesWrapper = styled(View)`
  padding: 10px;
`;

const Title = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
`;

const RestaurantWrapper = styled(View)`
  margin-right: ${(props) => props.theme.space[2]};
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Title>
        <Typography variant="caption">Favorites</Typography>
      </Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites?.map((restaurant) => {
          const key = restaurant.name;
          return (
            <RestaurantWrapper key={key}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </RestaurantWrapper>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
