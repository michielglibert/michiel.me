import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Variant } from "../../types/Variant";
import GithubNavigation from "./GithubNavigation";
import NavigationItem from "./NavigationItem";

interface Props {
  variant: Variant;
}

const NavigationItems: React.FC<Props> = ({ variant }) => {
  return (
    <HStack spacing="20">
      <NavigationItem title="HOME" to="/" />
      <NavigationItem title="ABOUT ME" to="/about" />
      <NavigationItem title="CAREER" to="/career" />
      <NavigationItem title="CONTACT" to="/contact" />
      <NavigationItem title="BLOG" color="#4DA1A9" to="/blog" />
      <GithubNavigation variant={variant} />
    </HStack>
  );
};

export default NavigationItems;
