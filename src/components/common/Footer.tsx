import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useVariant } from "../../store/VariantContext";
import { DEFAULT_PADDING } from "./AppShell";

const Footer: React.FC = () => {
  const variant = useVariant();

  return (
    <Text
      align="center"
      color={variant}
      p={DEFAULT_PADDING}
      pt={{ base: "10", laptopL: "12" }}
    >
      Made with ♥ by Michiel
    </Text>
  );
};

export default Footer;
