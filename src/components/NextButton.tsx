import { Center, Button, HStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";
import Underline from "./Underline";

interface Props {}

const NextButton: React.FC<Props> = () => {
  return (
    <Link href="/about">
      <HStack
        color="white"
        spacing="4"
        _hover={{
          "> div > div": {
            width: "100%",
          },
        }}
      >
        <Underline noHover>
          <Text fontSize="2xl">About me</Text>
        </Underline>
        <Center
          borderRadius="full"
          border="2px"
          borderColor="white"
          w="44px"
          h="44px"
        >
          <ArrowForwardIcon color="white" boxSize={8} />
        </Center>
      </HStack>
    </Link>
  );
};

export default NextButton;
