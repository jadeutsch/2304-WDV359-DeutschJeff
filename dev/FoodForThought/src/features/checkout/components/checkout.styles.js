import { View } from "react-native";
import { Avatar } from "react-native-paper";
import styled from "styled-components/native";

export const CartIconContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.ui.senary};
`;

export const Wrapper = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;

export const MiniSpacer = styled(View)`
  margin-top: ${(props) => props.theme.space[3]};
`;
