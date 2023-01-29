import { Button, Stack, Link } from "@chakra-ui/react";
import React from "react";
import DownloadIcon from "../../theme/icons/Download";
import { DEFAULT_PADDING } from "../common/AppShell";
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
        href="https://1drv.ms/b/s!Ar5N90m1WjHXj-BbPS8juwN1wXHhqg?e=I5hi6a"
        isExternal
      >
        Download my CV
      </Button>
      <NextButton to="/contact">Contact</NextButton>
    </Stack>
  );
};

export default CareerButtons;
