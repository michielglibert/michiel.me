import { VStack, Box, BoxProps, StackProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import UnderlinedTitle from "../common/UnderlinedTitle";

interface Props {
  title: string;
  childProps?: StackProps;
}

const Section: React.FC<PropsWithChildren<Props & BoxProps>> = ({
  title,
  children,
  childProps,
  ...props
}) => {
  return (
    <Box display="inline-block" w="100%" maxW="840px" {...props}>
      <UnderlinedTitle>{title}</UnderlinedTitle>
      <VStack
        align="flex-start"
        pt="8"
        spacing="8"
        maxW="3xl"
        ml="auto"
        mr={{ base: "auto", laptop: "0" }}
        {...childProps}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default Section;
