import { Box, Button, Flex, useBoolean, VStack } from "@chakra-ui/react";
import React from "react";
import { useVariant } from "../../store/VariantContext";
import Close from "../../theme/icons/Close";
import Hamburger from "../../theme/icons/Hamburger";
import NavigationItems from "./NavigationItems";

interface Props {}

const MobileNavigation: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useBoolean();
  const variant = useVariant();

  return (
    <>
      <Button variant="ghost" onClick={setIsMenuOpen.toggle} zIndex={2}>
        {isMenuOpen ? <Close boxSize={8} /> : <Hamburger boxSize={7} />}
      </Button>

      <VStack
        position="fixed"
        transition="transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);"
        left="0"
        right="0"
        top="0"
        bottom="0"
        zIndex={1}
        bg={variant === "white" ? "secondary.main" : "ghostWhite"}
        // Avoid stack margin
        m="0 !important"
        p="12"
        align="stretch"
        transform={`scale3d(${isMenuOpen ? "1,1,1" : "1,0,1"})`}
        transformOrigin="top"
      >
        <VStack
          flexDir="column"
          spacing="16"
          justify="center"
          align="center"
          textStyle="h3"
          flexGrow={1}
          opacity={isMenuOpen ? 1 : 0}
          transition="opacity 0.5s"
        >
          <NavigationItems />
        </VStack>
      </VStack>
    </>
  );
};

export default MobileNavigation;
