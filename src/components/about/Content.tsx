import React from "react";
import { Box, Text, VStack, Image } from "@chakra-ui/react";

const Content: React.FC = () => {
  return (
    <VStack spacing="8" textStyle="large" align="flex-start">
      <Text>
        I am Michiel Glibert, a software engineer with a strong focus on
        Front-End development. I have a passion for technology and constantly
        strive to expand my knowledge and skills in the field. My main drive in
        life is to make a meaningful impact, whether that be through the
        projects I work on or the people I help.
      </Text>

      {/* Commented till replace by image of me */}
      {/* <Image src="/images/pcdude.png" alt="Pc guy" borderRadius="lg" /> */}

      <Text>
        I have a natural inclination towards problem solving and enjoy tackling
        complex challenges. My experience as a software engineer has honed my
        ability to think critically and approach problems with a systematic
        mindset. I believe in the value of hard work, attention to detail, and a
        commitment to delivering high-quality solutions.
      </Text>

      <Text>
        I am always open to new opportunities and collaborations. If you have a
        project or idea that you believe I can contribute to, please don&apos;t
        hesitate to reach out.
      </Text>
    </VStack>
  );
};

export default Content;
