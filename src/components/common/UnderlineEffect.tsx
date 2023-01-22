import { VStack, Box, ColorProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface Props {
  isActive?: boolean;
  color?: ColorProps["color"];
}

const UnderlineEffect: React.FC<PropsWithChildren<Props>> = ({
  isActive,
  color = "currentcolor",
  children,
}) => {
  const activeStyling = {
    "> div": {
      width: "100%",
    },
  };

  return (
    <VStack
      align="flex-start"
      spacing="1px"
      cursor="pointer"
      _hover={activeStyling}
      {...(isActive && { sx: activeStyling })}
    >
      {children}
      <Box h="2px" bg={color} w="0" transition="width 300ms" />
    </VStack>
  );
};

export default UnderlineEffect;
