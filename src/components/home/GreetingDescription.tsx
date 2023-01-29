import { Center, Box, ScaleFade, Flex } from "@chakra-ui/react";
import { Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import NextButton from "../common/NextButton";
import Laptop from "../../../public/lottie/laptop.json";
import Lottie from "lottie-react";

const GreetingDescription: React.FC = () => {
  return (
    <Stack
      flexDir={{ base: "column", laptop: "row" }}
      spacing={{ base: "10", laptopL: "12" }}
      align="flex-start"
    >
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
      <Flex justify={{ base: "center", laptop: "flex-end" }} w="100%">
        <ScaleFade initialScale={0.3} in>
          <Box
            maxW={{ base: "md", laptop: "unset" }}
            mr={{ base: "-12", laptop: "-28", laptopL: "-36" }}
          >
            <Lottie animationData={Laptop} loop={true} />
          </Box>
        </ScaleFade>
      </Flex>
    </Stack>
  );
};

export default GreetingDescription;
