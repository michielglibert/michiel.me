import { Center, HStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import UnderlineEffect from "./UnderlineEffect";
import { useVariant } from "../../store/VariantContext";

interface Props {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  to: string;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  leftIcon,
  rightIcon,
  to,
  children,
}) => {
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
        {leftIcon}
        <UnderlineEffect>
          <Text textStyle="h5">{children}</Text>
        </UnderlineEffect>
        {rightIcon}
      </HStack>
    </Link>
  );
};

export default Button;
