import { VStack, Box, Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import UnderlinedTitle from "../common/UnderlinedTitle";

interface Props {
  title: string;
}

const Section: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Box display="inline-block" w="100%" maxW="840px">
      <UnderlinedTitle>{title}</UnderlinedTitle>
      <VStack align="flex-start" pt="8" spacing="8" maxW="3xl" ml="auto">
        {children}
      </VStack>
    </Box>
  );
};

export default Section;
