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
          w="11"
          h="11"
        >
          <ArrowForwardIcon boxSize={8} />
        </Center>
      </HStack>
    </Link>
  );
};

export default NextButton;
