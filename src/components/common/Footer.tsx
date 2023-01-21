import { Center, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Center bg="#000020" px="12" py="6">
      <Text align="center" color="white">
        Made with ♥ by Michiel{" "}
      </Text>
    </Center>
  );
};

export default Footer;
