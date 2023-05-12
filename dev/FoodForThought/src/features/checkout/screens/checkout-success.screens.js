import React from "react";

import { Typography } from "../../../components/typography/text.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { CartIconContainer, SuccessIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <SuccessIcon icon="check-bold" />
        <Typography variant="label">Success!</Typography>
      </CartIconContainer>
    </SafeArea>
  );
};
