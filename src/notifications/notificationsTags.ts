import OneSignal from "react-native-onesignal";

export function tagUserEmailCreate() {
  OneSignal.sendTags({
    user_name: "Caio",
    user_email: "caio@email.com",
  });
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.sendTag("cart_items_count", itemsCount);
}
