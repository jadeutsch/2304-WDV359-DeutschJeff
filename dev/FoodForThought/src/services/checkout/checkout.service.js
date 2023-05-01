import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51N2orWE4VVlolUceAbXFUJTlW2QeM27uKfGbObCgNKeDq5Cfbfh7SlofrpFIaQQZsYMqqqYRnu5gyepPQCzzCliP00qcuibwmG"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
