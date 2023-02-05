import { Button, Stack, Link } from "@chakra-ui/react";
import React from "react";
import DownloadIcon from "../../theme/icons/Download";
import NextButton from "../common/NextButton";

const CareerButtons: React.FC = () => {
  return (
    <Stack
      justify="space-between"
      align="center"
      spacing="4"
      maxW="6xl"
      w="100%"
      flexDir={{ base: "column", laptop: "row" }}
    >
      <Button
        as={Link}
        size="lg"
        rightIcon={<DownloadIcon boxSize={5} />}
        href="https://storage.googleapis.com/michiel-me/CV_MichielGlibert.pdf"
        isExternal
      >
        Download my CV
      </Button>
      <NextButton to="/contact">Contact</NextButton>
    </Stack>
  );
};

export default CareerButtons;
