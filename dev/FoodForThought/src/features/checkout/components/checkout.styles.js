import { View } from "react-native";
import { ActivityIndicator, Avatar, Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: colors.brand.primary,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.ui.senary};
`;

export const ErrorIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.ui.error};
`;

export const SuccessIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.ui.success};
`;

export const Wrapper = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;

export const MiniSpacer = styled(View)`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  textColor: colors.text.inverse,
  mode: "elevated",
  icon: "cash-fast",
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
  buttonColor: colors.ui.senary,
  textColor: colors.text.primary,
  mode: "elevated",
  icon: "cart-off",
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const LargeWrapper = styled(View)`
  margin-top: ${(props) => props.theme.space[5]};
`;
