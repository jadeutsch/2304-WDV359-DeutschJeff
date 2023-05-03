import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { payRequest } from "../../../services/checkout/checkout.service";
import { CreditCardInput } from "../components/credit-card.componet";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { Typography } from "../../../components/typography/text.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIcon,
  CartIconContainer,
  Wrapper,
  MiniSpacer,
  NameInput,
  PayButton,
  ClearButton,
  LargeWrapper,
  PaymentProcessing,
} from "../components/checkout.styles";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, clearCart, sum } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card.",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: err,
        });
      });
  };

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
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Wrapper>
          <MiniSpacer>
            <Typography>Your Order</Typography>
          </MiniSpacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return (
                <List.Item
                  title={`${restaurant.name} - ${item} - $${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Typography>Total: ${sum / 100}</Typography>
        </Wrapper>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Wrapper>
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={navigation.navigate("CheckoutError", {
                error:
                  "Something went wrong trying to process your credit card.",
              })}
            />
          )}
        </Wrapper>
        <LargeWrapper>
          <PayButton disabled={isLoading} onPress={onPay}>
            Pay Now
          </PayButton>
          <MiniSpacer />
          <ClearButton disabled={isLoading} onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </LargeWrapper>
      </ScrollView>
    </SafeArea>
  );
};
