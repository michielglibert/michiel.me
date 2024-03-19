import { SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import AppShell from "../components/common/AppShell";
import Project from "../components/projects/Project";

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
        <Stack>
          <SimpleGrid columns={3} maxW="7xl" w="100%" columnGap="12">
            <Project
              year={2024}
              projectTitle="Renovatiewerken Mille"
              projectDescription="A website made in Webflow for Mille. Mainly to showcase their work and to get in touch with potential clients."
              projectTags={["Website", "Webflow"]}
              imgSrc="/images/mille.webp"
              imgAlt="Renovatiewerken mille"
              href="https://www.renovatiewerkenmille.be/"
            />
            <Project
              year={2023}
              projectTitle="Levenue"
              projectDescription="A website made in Webflow for Levenue. Levenue is a FinTech company offering a platform for securing funding for recurring revenue businesses."
              projectTags={["Website", "Webflow"]}
              imgSrc="/images/levenue-website.webp"
              imgAlt="Levenue"
              href="https://www.levenue.com/"
            />
            <Project
              year={2019}
              projectTitle="Solomon Islands Elections"
              projectDescription="A small web application made for a school project. This web application helped with location of polling stations and showing the election results."
              projectTags={["Website", "Webflow"]}
              imgSrc="/images/solomon.webp"
              imgAlt="Solomon Islands Elections"
              href="https://solomonelections.net/"
            />
          </SimpleGrid>
        </Stack>
      </AppShell>
    </>
  );
};

export default Projects;
