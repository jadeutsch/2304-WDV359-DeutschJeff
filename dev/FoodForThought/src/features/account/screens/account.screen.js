import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  MiniSpacer,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <MiniSpacer />
        <AuthButton onPress={() => navigation.navigate("Register")}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
