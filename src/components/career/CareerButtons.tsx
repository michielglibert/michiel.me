import {
  Button,
  Stack,
  Link,
  SimpleGrid,
  Center,
  GridItem,
  Box,
} from "@chakra-ui/react";
import React from "react";
import DownloadIcon from "../../theme/icons/Download";
import NextButton from "../common/NextButton";
import CareerLine from "./CareerLine";

const CareerButtons: React.FC = () => {
  return (
    <SimpleGrid columns={12} maxW="6xl" w="100%">
      <GridItem gridColumn="span 1" justifySelf="center">
        <Box
          w={{ base: "1", tabletS: "1.5", laptopL: "2" }}
          h={{ base: "200%", laptop: "300%" }}
          bg="primary.main"
        />
      </GridItem>
      <Stack
        gridColumn="span 11"
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
    </SimpleGrid>
  );
};

export default CareerButtons;
