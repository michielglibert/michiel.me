import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { Typewriter } from "react-simple-typewriter";

interface Props {}

const Greeting: React.FC<Props> = () => {
  return (
    <Text color="white" fontSize="6xl" fontWeight="extrabold">
      Hi, I&apos;m Michiel,{" "}
      <Box as="br" display={{ base: "block", xl: "none" }} /> a{" "}
      <Box as="span" color="#348AA7">
        <Typewriter
          words={[
            "Software Engineer",
            "Problem Solver",
            "Tech Enthousiast",
            "Team player",
          ]}
          cursor
          cursorColor="#348AA7"
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
