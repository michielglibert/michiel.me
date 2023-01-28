import { VStack } from "@chakra-ui/react";
import React from "react";
import CareerItem from "./CareerItem";

const CareerItems: React.FC = ({}) => {
  return (
    <VStack align="stretch" spacing="8" w="100%">
      <CareerItem
        jobTitle="Front-End Lead"
        jobDescription="Lead Front-End engineer for a SaaS broker platform (InsurTech). Focussing on all aspects of front-end development. This includes designing the technical architecture, building the design-system, implementing product features and managing projects."
        jobTags={["WeGroup", "Current"]}
        imgSrc="/images/wegroup.png"
        href="https://www.wegroup.be/"
      />
      <CareerItem
        jobTitle="Front-End Developer"
        jobDescription="Pursuing my professional career by starting in what I liked the most, Front-End development. I started working on a SaaS broker platform (InsurTech). Initially this was working on basic product features, but very quickly I had taken on much more complex projects."
        jobTags={["WeGroup", "2020 - 2022"]}
        imgSrc="/images/wegroup.png"
        href="https://www.wegroup.be/"
      />
      <CareerItem
        jobTitle="Full-Stack Developer"
        jobDescription="During my internship at HoGent, I served as a Full-Stack Engineer at Kayzr, an E-Sports SaaS startup. My responsibilities included developing features and troubleshooting issues. By the end of my internship, I was able to work on larger projects."
        jobTags={["Kayzr", "2018"]}
        imgSrc="/images/kayzr.png"
        href="https://kayzr.com/"
      />
    </VStack>
  );
};

export default CareerItems;
