import { VStack } from "@chakra-ui/react";
import React from "react";
import CareerItem from "./CareerItem";

const CareerItems: React.FC = ({}) => {
  return (
    <VStack align="stretch" spacing="8" w="100%">
      <CareerItem
        jobTitle="Software Engineer"
        jobDescription="Levenue is a FinTech company offering a platform for securing funding for recurring revenue businesses. As a Full-Stack Software Engineer, I participate in multiple projects. My primary focus here is contributing to the development of a microservices-based underwriting engine with the goal to assess the eligibility of companies for upfront cash, delivered within 48 hours. Underwriting this fast was almost unseen in the industry. Typescript, Kotlin and GoLang are the main technologies I used here."
        jobTags={["Levenue", "FinTech", "Aug 2023 - Today"]}
        imgSrc="/images/levenue.svg"
        href="https://www.levenue.com/"
      />
      <CareerItem
        jobTitle="Front-End Engineer and Lead"
        jobDescription="I started my professional career by joining an InsurTech startup as a Front-End Engineer. After 2 years I was promoted to Front-End Lead for the increased productivity that the team gained. I was responsible for the Front-End of our product where the core feature contained complex frontend business logic. All of this was built in React with Typescript. At it’s peak the company reached over 1 million annually recurring revenue."
        jobTags={["WeGroup", "InsurTech", "Aug 2020 - Aug 2023"]}
        imgSrc="/images/wegroup.png"
        href="https://www.wegroup.be/"
      />
      <CareerItem
        jobTitle="Full-Stack Developer"
        jobDescription="During my time at HoGent, I served as a Full-Stack Engineer at Kayzr, an E-Sports SaaS startup. Their platform was built with React, React Native and Node.js. I worked on the main product where my primary focus was developing the front and back-end of an important feature that would team up users depending on their skill level."
        jobTags={["Kayzr", "Saas", "2018"]}
        imgSrc="/images/kayzr.png"
        href="https://kayzr.com/"
      />
    </VStack>
  );
};

export default CareerItems;
