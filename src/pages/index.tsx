import Head from "next/head";
import {
  Center,
  GridItem,
  SimpleGrid,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import AppShell from "../components/common/AppShell";
import GreetingDescription from "../components/home/GreetingDescription";
import Greeting from "../components/home/Greeting";
import GreetingAnimation from "../components/home/GreetingAnimation";

export default function Home() {
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
        bg="#000020"
        variant="white"
        containerProps={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <SimpleGrid columns={12} maxW="7xl" w="100%" columnGap="12">
          <VStack
            alignSelf="center"
            gridColumn="span 8"
            align="flex-start"
            spacing={{ base: "8", laptop: "10", laptopL: "16" }}
          >
            <Greeting />
            <GreetingDescription />
          </VStack>
          <GridItem alignSelf="center" gridColumn="span 4">
            <GreetingAnimation />
          </GridItem>
        </SimpleGrid>
      </AppShell>
    </>
  );
}
