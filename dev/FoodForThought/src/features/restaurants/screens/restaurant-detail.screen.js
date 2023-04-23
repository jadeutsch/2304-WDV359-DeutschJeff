import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);

  const { restaurant } = route.params;

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
          <List.Item title="Scrambled Eggs" />
          <List.Item title="Pancakes" />
          <List.Item title="Belgian Waffle" />
          <List.Item title="Oatmeal" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunch}
          onPress={() => setLunch(!lunch)}
        >
          <List.Item title="Hamburger" />
          <List.Item title="Cheeseburger" />
          <List.Item title="Hot Dog" />
          <List.Item title="Grilled Chicken Sandwich" />
          <List.Item title="Caesar Salad" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinner}
          onPress={() => setDinner(!dinner)}
        >
          <List.Item title="Prime Rib" />
          <List.Item title="Lemon Pepper Chicken" />
          <List.Item title="Cacio e Pepe" />
          <List.Item title="Smoked Salmon" />
          <List.Item title="Pork Chops" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinks}
          onPress={() => setDrinks(!drinks)}
        >
          <List.Item title="Water" />
          <List.Item title="Tea" />
          <List.Item title="Coffee" />
          <List.Item title="Soda" />
          <List.Item title="Wine" />
          <List.Item title="Beer" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
