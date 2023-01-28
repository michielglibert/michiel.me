import { Button, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import DownloadIcon from "../../theme/icons/Download";
import NextButton from "../common/NextButton";

const CareerButtons: React.FC = () => {
  return (
    <HStack justify="space-between" spacing="4" maxW="6xl" w="100%">
      <Button size="lg" rightIcon={<DownloadIcon boxSize={5} />}>
        Download my CV
      </Button>
      <NextButton to="/contact">Contact</NextButton>
    </HStack>
  );
};

export default CareerButtons;
