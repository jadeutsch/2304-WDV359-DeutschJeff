import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screens";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

const Tab = createBottomTabNavigator();

const TabIcon = {
  Restaurants: { active: "md-restaurant", inactive: "md-restaurant-outline" },
  Checkout: { active: "md-cart", inactive: "md-cart-outline" },
  Map: { active: "ios-map", inactive: "ios-map-outline" },
  Settings: { active: "ios-settings-sharp", inactive: "ios-settings-outline" },
};

const createScreenOptions = ({ route }) => {
  const iconName = TabIcon[route.name];
  return {
    tabBarIcon: ({ focused, size, color }) => {
      if (focused === true) {
        return <Ionicons name={iconName.active} size={size} color={color} />;
      } else if (focused === false) {
        return <Ionicons name={iconName.inactive} size={size} color={color} />;
      }
    },
    tabBarActiveTintColor: "#4c6a14",
    tabBarInactiveTintColor: "#1a1f07",
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
