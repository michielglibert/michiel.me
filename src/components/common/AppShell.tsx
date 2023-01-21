import { Box, FlexProps, Flex, VStack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { Variant } from "../../types/Variant";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "./Footer";

interface Props {
  navVariant?: Variant;
}

const AppShell: React.FC<PropsWithChildren<FlexProps & Props>> = ({
  children,
  navVariant,
  ...props
}) => {
  return (
    <Flex flexDirection="column" h="100%" pos="relative" {...props}>
      <VStack flexGrow={1} spacing="8" p="12" align="stretch">
        <NavigationBar variant={navVariant} />
        <Box flexGrow={1}>{children}</Box>
      </VStack>
      <Footer />
    </Flex>
  );
};

export default AppShell;
