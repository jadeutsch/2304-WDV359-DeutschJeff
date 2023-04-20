import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar placeholder="Search" elevation={2} />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
