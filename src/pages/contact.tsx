import { GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import AppShell from "../components/common/AppShell";
import LeftSection from "../components/contact/LeftSection";
import RightSection from "../components/contact/RightSection";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Michiel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        variant="black"
        backgroundImage="url(/images/background-curved-lines.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
        containerProps={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: "0 !important",
        }}
      >
        <SimpleGrid
          columns={{ base: 1, laptop: 2 }}
          h="100%"
          maxW="1300px"
          columnGap="20"
          rowGap="10"
        >
          <GridItem alignSelf="center">
            <LeftSection />
          </GridItem>
          <GridItem alignSelf="center">
            <RightSection />
          </GridItem>
        </SimpleGrid>
      </AppShell>
    </>
  );
};

export default Contact;
