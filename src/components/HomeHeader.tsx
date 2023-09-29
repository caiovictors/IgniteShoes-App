import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Heading, HStack, Icon, Text, VStack, Avatar } from "native-base";

import userPhotoDefault from "../assets/userPhotoDefault.png";

const photoLink = "https://avatars.githubusercontent.com/u/12973109?v=4";

export function HomeHeader() {
  const [photo, setPhoto] = useState(userPhotoDefault);

  useFocusEffect(
    useCallback(() => {
      fetch(photoLink).then(() => setPhoto({ uri: photoLink }));
    }, [])
  );

  return (
    <HStack pt={16} pb={5} px={8} bg="gray.600" alignItems="center">
      <Avatar
        source={photo}
        size={16}
        mr={4}
        borderWidth={2}
        borderColor="gray.400"
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Caio Victor
        </Heading>
      </VStack>

      <Icon as={Feather} name="log-out" color="gray.200" size={7} />
    </HStack>
  );
}
