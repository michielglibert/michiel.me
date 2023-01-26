import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useVariant } from "../../store/VariantContext";

const Footer: React.FC = () => {
  const variant = useVariant();

  return (
    <Flex align="flex-end" as="footer" px="12" py="6" w="100%">
      <Text align="right" color={variant} flexGrow={1}>
        Made with ♥ by Michiel
      </Text>
    </Flex>
  );
};

export default Footer;
