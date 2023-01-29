import { HStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { useVariant } from "../../store/VariantContext";
import { DEFAULT_PADDING } from "../common/AppShell";
import MobileNavigation from "./MobileNavigation";
import NavigationItems from "./NavigationItems";
import NavigationLogo from "./NavigationLogo";

const NavigationBar: React.FC = () => {
  const variant = useVariant();
  const mobileMenu = useBreakpointValue({ base: true, md: false });

  return (
    <HStack
      justify="space-between"
      spacing="8"
      p={DEFAULT_PADDING}
      color={variant}
    >
      <NavigationLogo />
      {mobileMenu ? (
        <MobileNavigation />
      ) : (
        <HStack spacing={{ base: "8", laptopL: "20" }} textStyle="large">
          <NavigationItems />
        </HStack>
      )}
    </HStack>
  );
};

export default NavigationBar;
