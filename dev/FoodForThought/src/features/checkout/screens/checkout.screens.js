import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CreditCardInput } from "../components/credit-card.componet";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { Typography } from "../../../components/typography/text.component";
import { CartContext } from "../../../services/cart/cart.context";
import { CartIcon, CartIconContainer, Wrapper, MiniSpacer } from "../components/checkout.styles";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Typography>Your Cart Is Empty</Typography>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Wrapper>
          <MiniSpacer>
            <Typography>Your Order</Typography>
          </MiniSpacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${restaurant.name} - ${item} - $${price / 100}`} />;
            })}
          </List.Section>
          <Typography>Total: ${sum / 100}</Typography>
        </Wrapper>
        <CreditCardInput />
      </ScrollView>
    </SafeArea>
  );
};
