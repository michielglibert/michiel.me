import { HStack } from "@chakra-ui/react";
import React from "react";
import GithubNavigation from "./GithubNavigation";
import NavigationItem from "./NavigationItem";

const NavigationItems: React.FC = () => {
  return (
    <HStack spacing="20">
      <NavigationItem title="HOME" to="/" />
      <NavigationItem title="ABOUT ME" to="/about" />
      <NavigationItem title="CAREER" to="/career" />
      <NavigationItem title="CONTACT" to="/contact" />
      <NavigationItem title="BLOG" color="#4DA1A9" to="/blog" />
      <GithubNavigation />
    </HStack>
  );
};

export default NavigationItems;
