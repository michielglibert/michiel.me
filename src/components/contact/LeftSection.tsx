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
      pt="20"
    >
      <Text align="left" fontSize="5xl" fontWeight="bold">
        Let&apos;s chat. <br /> Tell me about your interest in me.
      </Text>
      <Text align="left" fontSize="2xl" fontWeight="medium">
        Let’s create something together 🤘
      </Text>

      <Center w="100%">
        <Box w="md">
          <Lottie animationData={ReactLottie} loop={false} />
        </Box>
      </Center>
    </VStack>
  );
};

export default LeftSection;
