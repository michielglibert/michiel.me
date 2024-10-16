import { SimpleGrid, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import AppShell from "../components/common/AppShell";
import Project from "../components/projects/Project";
import ProjectButtons from "../components/projects/ProjectButtons";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Michiel Glibert</title>
        <meta
          name="description"
          content="Michiel Glibert, a software engineer based in Ghent that boasts a wide range of technical expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        variant="black"
        containerProps={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <VStack spacing="8">
          <SimpleGrid
            columns={{
              tablet: 2,
              laptopL: 3,
            }}
            maxW="7xl"
            w="100%"
            gap={{
              base: "6",
              tablet: "8",
              laptop: "16",
            }}
          >
            <Project
              year="2024"
              projectTitle="Gietvloeren Mille"
              projectDescription="A website made by me in Next.js for Mille. Specifically to showcase their cast floors and concrete design offering, and also get in touch with potential clients."
              projectTags={["Website", "Solo", "Next.js"]}
              imgSrc="/images/gietvloeren-mille.webp"
              imgAlt="Gietvloeren mille"
              href="https://www.gietvloerenmille.be/"
              isSolo
            />
            <Project
              year="2024"
              projectTitle="Renovatiewerken Mille"
              projectDescription="A website made by me in Next.js for Mille. Mainly to showcase their renovations and to get in touch with potential clients."
              projectTags={["Next.js"]}
              imgSrc="/images/mille.webp"
              imgAlt="Renovatiewerken mille"
              href="https://renovatiewerkenmille.be/"
              isSolo
            />
            <Project
              year="2023 - 2024"
              projectTitle="Levenue Marketplace"
              projectDescription="A platform that allowed companies to request funding and enabled other companies to invest in them. I worked on both the front-end and back-end."
              projectTags={["Web App", "Go", "React", "Typescript"]}
              imgSrc="/images/marketplace.webp"
              imgAlt="Levenue Marketplace"
              href="https://app.levenue.com/"
              organization="Levenue"
            />
            <Project
              year="2023 - 2024"
              projectTitle="Levenue Underwriting Engine"
              projectDescription="This highly technical engine was made by me and the team to calculate the risk of a company and determine the amount of funding they could receive automatically within 48 hours."
              projectTags={[
                "Levenue",
                "Kotlin",
                "Spring Boot",
                "React",
                "Typescript",
              ]}
              imgSrc="/images/underwriting-engine.webp"
              imgAlt="Levenue Underwriting Engine"
              organization="Levenue"
            />
            <Project
              year="2023"
              projectTitle="Levenue Website"
              projectDescription="A website made in Webflow for Levenue. Levenue is a FinTech company offering a platform for securing funding for recurring revenue businesses."
              projectTags={["Website", "Webflow"]}
              imgSrc="/images/levenue-website.webp"
              imgAlt="Levenue"
              href="https://www.levenue.com/"
              organization="Levenue"
              isSolo
            />
            <Project
              year="2022"
              projectTitle="WeGroup Onboarding"
              projectDescription="A small application made for WeGroup to help with the onboarding of new clients."
              projectTags={["Website", "Next.js"]}
              imgSrc="/images/wegroup-onboarding.webp"
              imgAlt="WeGroup Onboarding"
              href="https://onboarding.wegroup.be/"
              organization="WeGroup"
              isSolo
            />
            <Project
              year="2020 - 2023"
              projectTitle="WeGroup Broker Platform"
              projectDescription="WeGroup is an online distribution platform that helps insurance providers give and follow up on advice in a digital or hybrid manner. I did the lead developement of the front-end."
              projectTags={["Web App", "React", "Typescript"]}
              imgSrc="/images/wegroup.webp"
              imgAlt="WeGroup Broker Platform"
              href="https://app.wegroup.be/"
              organization="WeGroup"
            />
            <Project
              year="2019"
              projectTitle="Solomon Islands Elections"
              projectDescription="A small web application made for a school project. This application helped with location of polling stations and showing the election results."
              projectTags={["Web App", "React", "Node.JS"]}
              imgSrc="/images/solomon.webp"
              imgAlt="Solomon Islands Elections"
              href="https://solomonelections.net/"
              organization="UGent"
            />
            <Project
              year="2018"
              projectTitle="Kayzr E-Sports Platform"
              projectDescription="Kayzr is a platform where gamers can compete against each other in tournaments. I worked on the mobile and web application."
              projectTags={["Web App", "React", "Node.JS"]}
              imgSrc="/images/kayzr.webp"
              imgAlt="Kayzr"
              href="https://kayzr.com/"
              organization="Kayzr"
            />
          </SimpleGrid>
          <ProjectButtons />
        </VStack>
      </AppShell>
    </>
  );
};

export default Projects;
