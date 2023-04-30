import { ImageBackground, StatusBar, SafeAreaView, View } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

export const SettingsBackground = styled(ImageBackground).attrs({
  source: {
    uri: "https://jeffdeutsch-projects.s3.amazonaws.com/foodforthought/settingsscreenbg.jpg",
  },
})`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const SettingsCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AvatarContainer = styled(View)`
  align-items: center;
`;

export const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${(props) => props.theme.colors.text.primary};
`;

export const AvatarImage = styled(Avatar.Image)`
  background-color: ${(props) => props.theme.colors.text.primary};
`;

export const SettingsSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SettingsItem = styled(List.Item)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsIcon = styled(List.Icon)`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const MiniSpacer = styled(View)`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const MenuSpacer = styled(View)`
  padding: ${(props) => props.theme.space[1]};
`;

export const User = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[1]};
`;
