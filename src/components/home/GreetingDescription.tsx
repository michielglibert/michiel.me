import { Box, ScaleFade } from "@chakra-ui/react";
import { HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import NextButton from "../common/NextButton";
import Laptop from "../../../public/lottie/laptop.json";
import Lottie from "lottie-react";

const GreetingDescription: React.FC = () => {
  return (
    <HStack spacing="12" align="flex-start">
      <VStack spacing="16" align="stretch">
        <Text color={"white"} maxW="2xl" fontSize="4xl">
          Pixel perfect, code clean, User-first, always keen. Front-end flows,
          design glows, Innovative solutions, always a pro.
        </Text>
        <NextButton to="/about">About me</NextButton>
      </VStack>
      <ScaleFade initialScale={0.3} in>
        <Box display={{ base: "none", lg: "block" }} mr="-36">
          <Lottie animationData={Laptop} loop={true} />
        </Box>
      </ScaleFade>
    </HStack>
  );
};

export default GreetingDescription;
