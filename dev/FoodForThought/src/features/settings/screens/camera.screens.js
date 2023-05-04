import { Camera, CameraType } from "expo-camera";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ProfileCamera, InnerSnap } from "../components/camera.styles";

import { SafeArea } from "../../../utils/safe-area.component";
import { Typography } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
  const [hasPermission, setHasPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [setHasPermission]);

  if (!hasPermission) {
    return <View />;
  }

  if (!hasPermission.granted) {
    return (
      <SafeArea>
        <View>
          <Typography variant="error">No Access To Camera</Typography>
          <Button onPress={setHasPermission} title="Grant Permission" />
        </View>
      </SafeArea>
    );
  }

  return (
    <ProfileCamera ref={(camera) => (cameraRef.current = camera)} type={type}>
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
