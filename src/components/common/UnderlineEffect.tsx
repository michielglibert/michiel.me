import { VStack, Box, ColorProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface Props {
  color?: ColorProps["color"];
  noHover?: boolean;
}

const UnderlineEffect: React.FC<PropsWithChildren<Props>> = ({
  color = "currentcolor",
  noHover = false,
  children,
}) => {
  return (
    <VStack
      align="flex-start"
      spacing="1px"
      cursor="pointer"
      {...(!noHover && {
        _hover: {
          "> div": {
            width: "100%",
          },
        },
      })}
    >
      {children}
      <Box h="2px" bg={color} w="0" transition="width 300ms" />
    </VStack>
  );
};

export default UnderlineEffect;
