import { VStack } from "@chakra-ui/react";
import React from "react";
import CareerItem from "./CareerItem";

const CareerItems: React.FC = ({}) => {
  return (
    <VStack align="stretch" spacing="8" w="100%">
      <CareerItem
        jobTitle="Software Engineer"
        jobDescription="Levenue is a platform to get funding for recurring revenue businesses. As a full-stack software engineer I was involved in multiple projects which included developing micro-services and maintaining a front-end platform used by various companies and investors."
        jobTags={["Levenue", "FinTech", "Aug 2023 - Today"]}
        imgSrc="/images/levenue.png"
        href="https://www.levenue.com/"
      />
      <CareerItem
        jobTitle="Front-End Lead"
        jobDescription="Lead Front-End engineer for a SaaS broker platform (InsurTech) where at it's peak it reached 1 million annual recurring revenue. This job focused on all aspects of front-end development. This includes designing the technical architecture, building the design-system, implementing product features and managing projects."
        jobTags={["WeGroup", "InsurTech", "Aug 2022 - Today"]}
        imgSrc="/images/wegroup.png"
        href="https://www.wegroup.be/"
      />
      <CareerItem
        jobTitle="Front-End Developer"
        jobDescription="Pursuing my professional career by starting in what I liked the most, Front-End development. I started working on a SaaS broker platform (InsurTech). Initially this was working on basic product features, but very quickly I had taken on much more complex projects."
        jobTags={["WeGroup", "InsurTech", "Aug 2020 - Aug 2022"]}
        imgSrc="/images/wegroup.png"
        href="https://www.wegroup.be/"
      />
      <CareerItem
        jobTitle="Full-Stack Developer"
        jobDescription="I did an internship as a Full-Stack Engineer at Kayzr, an E-Sports SaaS startup. My responsibilities included developing features and troubleshooting issues. By the end of my internship, I was able to work on larger projects."
        jobTags={["Kayzr", "Saas", "2018"]}
        imgSrc="/images/kayzr.png"
        href="https://kayzr.com/"
      />
    </VStack>
  );
};

export default CareerItems;
