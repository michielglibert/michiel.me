import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Text align="center" color="white">
      Made with ♥ by Michiel{" "}
    </Text>
  );
};

export default Footer;
