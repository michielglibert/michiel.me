import { Center, Button, HStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import UnderlineEffect from "./UnderlineEffect";
import { useVariant } from "../../store/VariantContext";

interface Props {
  to: string;
}

const NextButton: React.FC<PropsWithChildren<Props>> = ({ to, children }) => {
  const variant = useVariant();

  return (
    <Link href={to}>
      <HStack
        color={variant}
        spacing="4"
        _hover={{
          "> div > div": {
            width: "100%",
          },
        }}
      >
        <UnderlineEffect>
          <Text textStyle="h5">{children}</Text>
        </UnderlineEffect>
        <Center
          borderRadius="full"
          border="2px"
          borderColor={variant}
          w={{ base: "9", laptop: "11" }}
          h={{ base: "9", laptop: "11" }}
        >
          <ArrowForwardIcon boxSize={{ base: 6, laptop: 8 }} />
        </Center>
      </HStack>
    </Link>
  );
};

export default NextButton;
