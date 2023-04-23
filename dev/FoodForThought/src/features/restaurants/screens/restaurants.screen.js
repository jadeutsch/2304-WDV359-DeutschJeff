import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { Search } from "../components/search.component";

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -50px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={100} animating={true} color={"#4c6a14"} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
