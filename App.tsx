import { Platform, StatusBar } from "react-native";
import OneSignal from "react-native-onesignal";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";
import { ONE_SIGNAL_ID } from "@env";
import { tagUserEmailCreate } from "./src/notifications/notificationsTags";
import { useEffect } from "react";

const oneSignalAppId = Platform.OS === "android" ? ONE_SIGNAL_ID : "";
OneSignal.setAppId(oneSignalAppId!);

OneSignal.promptForPushNotificationsWithUserResponse();

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate();

  useEffect(() => {
    // verify if user has clicked on background notification
    const unsubscribe = OneSignal.setNotificationOpenedHandler(() => {
      console.log("Notificação aberta");
    });
    return () => unsubscribe;
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
