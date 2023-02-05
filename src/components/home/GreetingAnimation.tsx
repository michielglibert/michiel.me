import { Flex, ScaleFade, Box } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import Laptop from "../../../public/lottie/laptop.json";

interface Props {}

const GreetingAnimation: React.FC<Props> = () => {
  return (
    <Flex justify={{ base: "center", laptop: "flex-end" }} w="100%">
      <ScaleFade initialScale={0.3} in>
        <Box
          maxW={{ base: "md", laptop: "unset" }}
          mr={{ base: "-12", laptop: "-28", laptopL: "-36" }}
        >
          <Lottie animationData={Laptop} loop={true} />
        </Box>
      </ScaleFade>
    </Flex>
  );
};

export default GreetingAnimation;
