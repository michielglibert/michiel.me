import { HStack } from "@chakra-ui/react";
import React from "react";
import { Variant } from "../../types/Variant";
import NavigationItems from "./NavigationItems";
import NavigationLogo from "./NavigationLogo";

interface Props {
  variant?: Variant;
}

const NavigationBar: React.FC<Props> = ({ variant = "black" }) => {
  return (
    <HStack justify="space-between" spacing="8" color={variant}>
      <NavigationLogo />
      <NavigationItems variant={variant} />
    </HStack>
  );
};

export default NavigationBar;
