import React, { useCallback, useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import {
  SettingsBackground,
  SettingsSafeArea,
  SettingsCover,
  SettingsItem,
  SettingsIcon,
  MenuSpacer,
  AvatarContainer,
  AvatarIcon,
  AvatarImage,
  MiniSpacer,
  User,
} from "../components/settings.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Typography } from "../../../components/typography/text.component";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <SettingsCover>
        <SettingsSafeArea>
          <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
              {!photo && <AvatarIcon size={180} icon="human" />}
              {photo && <AvatarImage size={180} source={{ uri: photo }} />}
            </TouchableOpacity>
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
