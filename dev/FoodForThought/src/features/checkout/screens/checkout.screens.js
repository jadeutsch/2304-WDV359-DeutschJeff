import React from "react";

import { CreditCardInput } from "../components/credit-card.componet";
import { SafeArea } from "../../../utils/safe-area.component";

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
