import { Center, Button, HStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import UnderlineEffect from "./UnderlineEffect";
import { Variant } from "../../types/Variant";

interface Props {
  variant?: Variant;
}

const NextButton: React.FC<PropsWithChildren<Props>> = ({
  variant = "black",
  children,
}) => {
  return (
    <Link href="/about">
      <HStack
        color={variant}
        spacing="4"
        _hover={{
          "> div > div": {
            width: "100%",
          },
        }}
      >
        <UnderlineEffect noHover>
          <Text fontSize="2xl">{children}</Text>
        </UnderlineEffect>
        <Center
          borderRadius="full"
          border="2px"
          borderColor={variant}
          w="44px"
          h="44px"
        >
          <ArrowForwardIcon boxSize={8} />
        </Center>
      </HStack>
    </Link>
  );
};

export default NextButton;
