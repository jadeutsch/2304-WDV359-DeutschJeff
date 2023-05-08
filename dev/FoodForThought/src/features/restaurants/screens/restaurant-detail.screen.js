import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { ButtonWrapper, OrderButton } from "./restaurant-detail.styles";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfast}
          onPress={() => setBreakfast(!breakfast)}
        >
          <List.Item title="French Toast" />
          <Divider />
          <List.Item title="Scrambled Eggs" />
          <Divider />
          <List.Item title="Pancakes" />
          <Divider />
          <List.Item title="Belgian Waffle" />
          <Divider />
          <List.Item title="Oatmeal" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunch}
          onPress={() => setLunch(!lunch)}
        >
          <List.Item title="Hamburger" />
          <Divider />
          <List.Item title="Cheeseburger" />
          <Divider />
          <List.Item title="Hot Dog" />
          <Divider />
          <List.Item title="Grilled Chicken Sandwich" />
          <Divider />
          <List.Item title="Caesar Salad" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinner}
          onPress={() => setDinner(!dinner)}
        >
          <List.Item title="Prime Rib" />
          <Divider />
          <List.Item title="Lemon Pepper Chicken" />
          <Divider />
          <List.Item title="Cacio e Pepe" />
          <Divider />
          <List.Item title="Smoked Salmon" />
          <Divider />
          <List.Item title="Pork Chops" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinks}
          onPress={() => setDrinks(!drinks)}
        >
          <List.Item title="Water" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Soda" />
          <Divider />
          <List.Item title="Wine" />
          <Divider />
          <List.Item title="Beer" />
        </List.Accordion>
      </ScrollView>
      <ButtonWrapper>
        <OrderButton
          onPress={() => {
            addToCart({ item: "Special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Food For Thought - $12.99
        </OrderButton>
      </ButtonWrapper>
    </SafeArea>
  );
};
