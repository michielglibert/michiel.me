import { Box, FlexProps, Flex, VStack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import VariantContextProvider from "../../store/VariantContext";
import { Variant } from "../../types/Variant";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "./Footer";

interface Props {
  variant?: Variant;
}

export const DEFAULT_PADDING = "12";

const AppShell: React.FC<PropsWithChildren<FlexProps & Props>> = ({
  variant = "black",
  children,
  ...props
}) => {
  return (
    <VariantContextProvider variant={variant}>
      <Flex flexDirection="column" h="100%" pos="relative" {...props}>
        <NavigationBar />
        <Box flexGrow={1} p={props.p != null ? props.p : DEFAULT_PADDING}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </VariantContextProvider>
  );
};

export default AppShell;
