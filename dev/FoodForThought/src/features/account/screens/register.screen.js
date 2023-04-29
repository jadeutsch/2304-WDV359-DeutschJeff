import React, { useState, useContext } from "react";

import {
  AccountBackground,
  AccountCover,
  Title,
  AccountContainer,
  AuthInput,
  MiniSpacer,
  ErrorContainer,
  RegisterButton,
  BackButton,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Typography } from "../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

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
          onChangeText={(p) => setPassword(p)}
        />
        <MiniSpacer />
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        {error.length ? (
          <ErrorContainer>
            <Typography variant="error">{error}</Typography>
          </ErrorContainer>
        ) : null}
        <MiniSpacer />
        <RegisterButton onPress={() => onRegister(email, password, repeatedPassword)}>
          Register
        </RegisterButton>
      </AccountContainer>
      <MiniSpacer />
      <BackButton onPress={() => navigation.goBack()}>Back</BackButton>
    </AccountBackground>
  );
};
