import React from "react";

import { SafeArea } from "../../../utils/safe-area.component";
import { Typography } from "../../../components/typography/text.component";
import { CartIconContainer, ErrorIcon } from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <ErrorIcon icon="check-bold" />
        <Typography variant="label">{error}</Typography>
      </CartIconContainer>
    </SafeArea>
  );
};
