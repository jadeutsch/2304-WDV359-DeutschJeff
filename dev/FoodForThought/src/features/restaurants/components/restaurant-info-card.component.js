import React from "react";
import { SvgXml } from "react-native-svg";

import Star from "../../../../assets/star";
import Open from "../../../../assets/open";
import {
  CardContainer,
  Cover,
  Section,
  SectionEnd,
  MiniSpacer,
  Info,
  Rating,
  Address,
  Lodging,
} from "./restaurant-info-card.styles";
import { Typography } from "../../../components/typography/text.component";
import { Favorite } from "../../../components/favorites/favorites.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "123 Main Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <Favorite restaurant={restaurant} />
      <Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Typography variant="label">{name}</Typography>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={Star}
                width="20"
                height="20"
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Typography variant="error">CLOSED TEMPORARILY</Typography>
            )}
            <MiniSpacer />
            {isOpenNow && <SvgXml xml={Open} width="16" height="16" />}
            <MiniSpacer />
            <Lodging source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
};
