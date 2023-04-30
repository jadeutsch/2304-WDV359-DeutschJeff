import { FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../utils/safe-area.component";

export const EmptyFavorites = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

export const FavoritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
