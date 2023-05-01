import React, { useContext } from "react";
import { Text } from "react-native";

import { CreditCardInput } from "../components/credit-card.componet";
import { SafeArea } from "../../../utils/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>restaurant: {JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
