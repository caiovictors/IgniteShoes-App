import {
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Icon,
  Pressable,
  Slide,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { OSNotification } from "react-native-onesignal";
import * as Linking from "expo-linking";

type Props = {
  data: OSNotification;
  onClose: () => void;
};

export function Notification({ data, onClose }: Props) {
  function handleOnPress() {
    if (data?.launchURL) {
      Linking.openURL(data.launchURL);
      onClose();
    }
  }

  return (
    <Slide in={!!data?.title} placement="top">
      <Pressable
        w="96%"
        p={4}
        borderRadius={8}
        bgColor="green.500"
        position="absolute"
        alignSelf="center"
        top={10}
        onPress={handleOnPress}
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Icon
            as={Ionicons}
            name="notifications-outline"
            size={5}
            color="black"
            mr={2}
          />

          <Text fontSize="md" color="black" flex={1}>
            {data.title}
          </Text>

          <IconButton
            variant="unstyled"
            _focus={{ borderWidth: 0 }}
            icon={<CloseIcon size="3" />}
            _icon={{ color: "coolGray.600" }}
            color="black"
            onPress={onClose}
          />
        </HStack>
      </Pressable>
    </Slide>
  );
}
