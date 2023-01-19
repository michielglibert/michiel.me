import { HStack } from "@chakra-ui/react";
import React from "react";
import NavigationItems from "./NavigationItems";
import NavigationLogo from "./NavigationLogo";

export type NavVariant = "black" | "white";

interface Props {
  variant?: NavVariant;
}

const NavigationBar: React.FC<Props> = ({ variant = "white" }) => {
  return (
    <HStack justify="space-between" spacing="8" color={variant}>
      <NavigationLogo />
      <NavigationItems />
    </HStack>
  );
};

export default NavigationBar;
