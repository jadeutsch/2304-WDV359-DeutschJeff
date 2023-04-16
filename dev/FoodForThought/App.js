import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Merienda_400Regular } from "@expo-google-fonts/merienda";
import { MerriweatherSans_400Regular } from "@expo-google-fonts/merriweather-sans";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "./src/infrastructure/theme/index";
import { SafeArea } from "./src/utils/safe-area.component";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";

// demo map and settings screens for basic navigation
const MapScreen = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Merienda_400Regular,
    MerriweatherSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
