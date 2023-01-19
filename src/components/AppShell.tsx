import { Box, FlexProps, Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import NavigationBar, {
  NavVariant,
} from "../features/navigation/components/NavigationBar";
import Footer from "./Footer";

interface Props {
  navVariant?: NavVariant;
}

const AppShell: React.FC<PropsWithChildren<FlexProps & Props>> = ({
  children,
  navVariant,
  ...props
}) => {
  return (
    <Flex flexDirection="column" h="100%" pos="relative" p="12" {...props}>
      <NavigationBar variant={navVariant} />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  );
};

export default AppShell;
