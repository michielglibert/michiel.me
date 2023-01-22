import { Box, FlexProps, Flex, VStack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import VariantContextProvider from "../../store/VariantContext";
import { Variant } from "../../types/Variant";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "./Footer";

interface Props {
  variant?: Variant;
}

const AppShell: React.FC<PropsWithChildren<FlexProps & Props>> = ({
  variant = "black",
  children,
  ...props
}) => {
  return (
    <VariantContextProvider variant={variant}>
      <Flex flexDirection="column" h="100%" pos="relative" {...props}>
        <VStack flexGrow={1} spacing="8" p="12" align="stretch">
          <NavigationBar />
          <Box flexGrow={1}>{children}</Box>
        </VStack>
        <Footer />
      </Flex>
    </VariantContextProvider>
  );
};

export default AppShell;
