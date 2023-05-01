import { Button } from "react-native-paper";

import styled from "styled-components/native";

import { colors } from "../../../infrastructure/theme/colors";
import { View } from "react-native";

export const ButtonWrapper = styled(View)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const OrderButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  textColor: colors.text.inverse,
  mode: "elevated",
  icon: "cash-fast",
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;
