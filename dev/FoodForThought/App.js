import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Merienda_400Regular } from "@expo-google-fonts/merienda";
import { MerriweatherSans_400Regular } from "@expo-google-fonts/merriweather-sans";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";
import { initializeApp } from "firebase/app";

import { theme } from "./src/infrastructure/theme/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
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
        <AuthenticationContextProvider>
          <StripeProvider publishableKey="pk_test_51N2orWE4VVlolUceAbXFUJTlW2QeM27uKfGbObCgNKeDq5Cfbfh7SlofrpFIaQQZsYMqqqYRnu5gyepPQCzzCliP00qcuibwmG">
            <Navigation />
          </StripeProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
