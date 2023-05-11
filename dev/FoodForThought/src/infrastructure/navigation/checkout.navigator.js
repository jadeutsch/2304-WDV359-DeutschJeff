import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CheckoutScreen } from "../../features/checkout/screens/checkout.screens";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screens";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screens";

const CheckoutStack = createNativeStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      screenOptions={{
        headerMode: "none",
      }}
    >
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name="CheckoutError"
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  );
};
