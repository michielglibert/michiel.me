import { VStack, Text } from "@chakra-ui/react";
import React from "react";
import NextButton from "../common/NextButton";

const GreetingDescription: React.FC = () => {
  return (
    <VStack
      spacing={{ base: "8", laptop: "10", laptopL: "16" }}
      align="stretch"
    >
      <Text
        color={"white"}
        maxW="3xl"
        textStyle={{ base: "h4", tablet: "h3" }}
        lineHeight="150%"
      >
        Code clean, solutions keen, User-first, across the scene. Front to back,
        systems stack, Innovative builds, always on track.
      </Text>
      <NextButton to="/about">About me</NextButton>
    </VStack>
  );
};

export default GreetingDescription;
