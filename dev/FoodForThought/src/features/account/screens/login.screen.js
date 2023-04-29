import React, { useState, useContext } from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  AuthButton,
  MiniSpacer,
  Title,
  BackButton,
  ErrorContainer,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Typography } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Food For Thought</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <MiniSpacer />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(p) => setPassword(p)}
        />
        {error.length ? (
          <ErrorContainer>
            <Typography variant="error">{error}</Typography>
          </ErrorContainer>
        ) : null}
        <MiniSpacer />
        <AuthButton onPress={() => onLogin(email, password)}>Login</AuthButton>
      </AccountContainer>
      <MiniSpacer />
      <BackButton onPress={() => navigation.goBack()}>Back</BackButton>
    </AccountBackground>
  );
};
