import { HStack } from "@chakra-ui/react";
import React from "react";
import { useVariant } from "../../store/VariantContext";
import { DEFAULT_PADDING } from "../common/AppShell";
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
      <NavigationItems />
    </HStack>
  );
};

export default NavigationBar;
