import { ImageBackground, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled(ImageBackground).attrs({
  source: {
    uri: "https://jeffdeutsch-projects.s3.amazonaws.com/foodforthought/homeloginbackground.jpg",
  },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled(View)`
  width: 100%;
  height: 35%;
  position: absolute;
  top: 20px;
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.ui.primary,
  textColor: colors.text.inverse,
  mode: "elevated",
  icon: "lock-open-outline",
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const RegisterButton = styled(Button).attrs({
  buttonColor: colors.ui.primary,
  textColor: colors.text.inverse,
  mode: "elevated",
  icon: "email",
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const MiniSpacer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled(View)`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const BackButton = styled(Button).attrs({
  buttonColor: colors.ui.primary,
  textColor: colors.text.inverse,
  mode: "elevated",
})``;
