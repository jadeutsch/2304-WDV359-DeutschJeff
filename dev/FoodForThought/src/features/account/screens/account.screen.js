import React from "react";
import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  RegisterButton,
  MiniSpacer,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/mobilefood.json")}
        />
      </AnimationWrapper>
      <Title>Food For Thought</Title>
      <AccountContainer>
        <AuthButton onPress={() => navigation.navigate("Login")}>Login</AuthButton>
        <MiniSpacer />
        <RegisterButton onPress={() => navigation.navigate("Register")}>Register</RegisterButton>
      </AccountContainer>
    </AccountBackground>
  );
};
