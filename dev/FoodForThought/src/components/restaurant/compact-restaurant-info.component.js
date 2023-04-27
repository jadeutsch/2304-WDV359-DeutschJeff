import React from "react";
import { Image, View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";

import { Typography } from "../typography/text.component";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const PlatformImage = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <PlatformImage source={{ uri: restaurant.photos[0] }} />
      <Typography center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Typography>
    </Item>
  );
};
