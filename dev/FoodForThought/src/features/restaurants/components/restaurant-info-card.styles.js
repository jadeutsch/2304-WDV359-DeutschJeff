import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components/native";

export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

export const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Lodging = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;
