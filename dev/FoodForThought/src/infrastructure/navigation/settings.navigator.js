import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screens";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screens";
import { CameraScreen } from "../../features/settings/screens/camera.screens";

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: "screen",
        cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
