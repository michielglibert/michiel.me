import { Center, HStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React, { PropsWithChildren } from "react";
import { useVariant } from "../../store/VariantContext";
import Button from "./Button";

interface Props {
  to: string;
}

const PreviousButton: React.FC<PropsWithChildren<Props>> = ({
  to,
  children,
}) => {
  const variant = useVariant();

  return (
    <Button
      to={to}
      leftIcon={
        <Center
          borderRadius="full"
          border="2px"
          borderColor={variant}
          w={{ base: "9", laptop: "11" }}
          h={{ base: "9", laptop: "11" }}
        >
          <ArrowForwardIcon
            boxSize={{ base: 6, laptop: 8 }}
            transform="rotate(180deg)"
          />
        </Center>
      }
    >
      {children}
    </Button>
  );
};

export default PreviousButton;
