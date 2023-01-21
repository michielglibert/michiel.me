import { VStack, Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface Props {
  noHover?: boolean;
}

const UnderlineEffect: React.FC<PropsWithChildren<Props>> = ({
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
      <Box h="2px" bg="currentcolor" w="0" transition="width 300ms" />
    </VStack>
  );
};

export default UnderlineEffect;
