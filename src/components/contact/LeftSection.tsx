import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import ReactLottie from "../../../public/lottie/react.json";

const LeftSection: React.FC = () => {
  return (
    <VStack
      spacing="1"
      justify="flex-start"
      align="flex-start"
      h="100%"
      w="100%"
      pt={{ base: "0", laptop: "20" }}
    >
      <Text textStyle={{ base: "h2", laptop: "h1" }}>
        Let&apos;s chat. <br /> Tell me about your interest in me.
      </Text>
      <Text textStyle="h4">Let&apos;s create something together 🤘</Text>

      <Center w="100%" display={{ base: "none", laptop: "block" }}>
        <Box w="md">
          <Lottie animationData={ReactLottie} loop={false} />
        </Box>
      </Center>
    </VStack>
  );
};

export default LeftSection;
