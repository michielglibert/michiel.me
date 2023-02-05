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
        Pixel perfect, code clean, User-first, always keen. Front-end flows,
        design glows, Innovative solutions, always a pro.
      </Text>
      <NextButton to="/about">About me</NextButton>
    </VStack>
  );
};

export default GreetingDescription;
