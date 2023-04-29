import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  RegisterButton,
  MiniSpacer,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Food For Thought</Title>
      <AccountContainer>
        <AuthButton onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <MiniSpacer />
        <RegisterButton onPress={() => navigation.navigate("Register")}>
          Register
        </RegisterButton>
      </AccountContainer>
    </AccountBackground>
  );
};
