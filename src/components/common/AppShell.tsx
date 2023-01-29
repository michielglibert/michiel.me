import { Box, FlexProps, Flex, BoxProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import VariantContextProvider from "../../store/VariantContext";
import { Variant } from "../../types/Variant";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "./Footer";

interface Props {
  variant?: Variant;
  containerProps?: BoxProps;
}

export const DEFAULT_PADDING = { base: "6", laptop: "8", laptopL: "12" };

const AppShell: React.FC<PropsWithChildren<FlexProps & Props>> = ({
  variant = "black",
  children,
  containerProps,
  ...props
}) => {
  return (
    <VariantContextProvider variant={variant}>
      <Flex
        flexDirection="column"
        minH="100%"
        pos="relative"
        overflowX="hidden"
        {...props}
      >
        <NavigationBar />
        <Box
          flexGrow={1}
          p={props.p != null ? props.p : DEFAULT_PADDING}
          {...containerProps}
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </VariantContextProvider>
  );
};

export default AppShell;
