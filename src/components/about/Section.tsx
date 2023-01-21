import { VStack, Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import UnderlinedTitle from "../common/UnderlinedTitle";

interface Props {
  title: string;
}

const Section: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <VStack align="flex-start" spacing="16">
      <UnderlinedTitle>{title}</UnderlinedTitle>
      <VStack spacing="8" align="flex-start" pl="16">
        {children}
      </VStack>
    </VStack>
  );
};

export default Section;
