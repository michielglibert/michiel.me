import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/about/AboutMe";
import AppShell from "../components/common/AppShell";
import NextButton from "../components/common/NextButton";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Michiel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        variant="black"
        backgroundImage="url(/images/background-triangles.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom center"
      >
        <VStack>
          <AboutMe>
            <NextButton to="/career">Career</NextButton>
          </AboutMe>
        </VStack>
      </AppShell>
    </>
  );
};

export default About;
