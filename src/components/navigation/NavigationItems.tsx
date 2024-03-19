import { StackProps } from "@chakra-ui/react";
import React from "react";
import GithubNavigation from "./GithubNavigation";
import NavigationItem from "./NavigationItem";

const NavigationItems: React.FC = () => {
  return (
    <>
      <NavigationItem title="HOME" to="/" />
      <NavigationItem title="ABOUT" to="/about" />
      <NavigationItem title="CAREER" to="/career" />
      <NavigationItem title="PROJECTS" to="/projects" />
      <NavigationItem title="CONTACT" color="#4DA1A9" to="/contact" />
      {/* Temporary commented while still WIP */}
      {/* <NavigationItem title="BLOG" color="#4DA1A9" to="/blog" /> */}
      <GithubNavigation />
    </>
  );
};

export default NavigationItems;
