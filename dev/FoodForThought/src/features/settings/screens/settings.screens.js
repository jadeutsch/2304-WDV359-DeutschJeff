import React, { useContext } from "react";
import { List } from "react-native-paper";

import {
  SettingsBackground,
  SettingsSafeArea,
  SettingsCover,
  SettingsItem,
  SettingsIcon,
  MenuSpacer,
  AvatarContainer,
  AvatarIcon,
  MiniSpacer,
  User,
} from "../components/settings.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Typography } from "../../../components/typography/text.component";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SettingsBackground>
      <SettingsCover>
        <SettingsSafeArea>
          <AvatarContainer>
            <AvatarIcon size={180} icon="human" />
            <MiniSpacer />
            <User>
              <Typography variant="label">{user.email}</Typography>
            </User>
          </AvatarContainer>
          <List.Section>
            <SettingsItem
              title="Favorites"
              description="View Your Favorites"
              left={(props) => <SettingsIcon {...props} icon="heart" />}
              onPress={() => navigation.navigate("Favorites")}
            />
            <MenuSpacer />
            <SettingsItem
              title="Logout"
              left={(props) => <SettingsIcon {...props} icon="door" />}
              onPress={onLogout}
            />
          </List.Section>
        </SettingsSafeArea>
      </SettingsCover>
    </SettingsBackground>
  );
};
