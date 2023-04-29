import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

// demo settings screens for basic navigation showcase
const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TabIcon = {
  Restaurants: { active: "md-restaurant", inactive: "md-restaurant-outline" },
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
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
