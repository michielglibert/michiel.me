import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { useVariant } from "../../store/VariantContext";
import { DEFAULT_PADDING } from "../common/AppShell";
import MobileNavigation from "./MobileNavigation";
import NavigationItems from "./NavigationItems";
import NavigationLogo from "./NavigationLogo";

const NavigationBar: React.FC = () => {
  const variant = useVariant();

  return (
    <HStack
      justify="space-between"
      spacing="8"
      p={DEFAULT_PADDING}
      color={variant}
    >
      <NavigationLogo />
      <Box display={{ base: "block", tablet: "none" }}>
        <MobileNavigation />
      </Box>
      <HStack
        display={{ base: "none", tablet: "flex" }}
        spacing={{ base: "8", laptopL: "20" }}
        textStyle="large"
      >
        <NavigationItems />
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
