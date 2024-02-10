import { StackProps } from "@chakra-ui/react";
import React from "react";
import GithubNavigation from "./GithubNavigation";
import NavigationItem from "./NavigationItem";

const NavigationItems: React.FC = () => {
  return (
    <>
      <NavigationItem title="HOME" to="/" />
      <NavigationItem title="ABOUT ME" to="/about" />
      <NavigationItem title="CAREER" to="/career" />
      <NavigationItem title="CONTACT" to="/contact" />
      {/* Temporary commented while still WIP */}
      <NavigationItem title="BLOG" color="#4DA1A9" to="/blog" />
      <GithubNavigation />
    </>
  );
};

export default NavigationItems;
