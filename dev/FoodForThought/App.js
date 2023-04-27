import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Merienda_400Regular } from "@expo-google-fonts/merienda";
import { MerriweatherSans_400Regular } from "@expo-google-fonts/merriweather-sans";
import { initializeApp } from "firebase/app";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";

import { theme } from "./src/infrastructure/theme/index";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

initializeApp(firebaseConfig);

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
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
