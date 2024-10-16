import { Stack } from "@chakra-ui/react";
import React from "react";
import NextButton from "../common/NextButton";

const ProjectButtons: React.FC = () => {
  return (
    <Stack
      justify="center"
      align="center"
      spacing="4"
      w="100%"
      flexDir={{ base: "column", laptop: "row" }}
    >
      <NextButton to="/contact">Contact</NextButton>
    </Stack>
  );
};

export default ProjectButtons;
