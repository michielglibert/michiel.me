import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { Typewriter } from "react-simple-typewriter";

interface Props {}

const Greeting: React.FC<Props> = () => {
  return (
    <Text color="white" textStyle="h1">
      Hi, I&apos;m Michiel,{" "}
      <Box as="br" display={{ base: "block", xl: "none" }} /> a{" "}
      <Box as="span" color="#2292A4">
        <Typewriter
          words={[
            "Software Engineer",
            "Problem Solver",
            "Tech Enthousiast",
            "Team player",
          ]}
          cursor
          cursorColor="#2292A4"
          delaySpeed={2500}
          typeSpeed={45}
          deleteSpeed={45}
          loop={0}
        />
      </Box>
    </Text>
  );
};

export default Greeting;
