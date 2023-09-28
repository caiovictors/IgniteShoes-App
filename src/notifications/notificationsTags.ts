import OneSignal from "react-native-onesignal";

export function tagUserEmailCreate() {
  OneSignal.sendTags({
    user_name: "Caio",
    user_email: "caio@email.com",
  });
}
