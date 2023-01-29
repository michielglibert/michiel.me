import Head from "next/head";
import { Center, useBreakpointValue, VStack } from "@chakra-ui/react";
import AppShell from "../components/common/AppShell";
import GreetingDescription from "../components/home/GreetingDescription";
import Greeting from "../components/home/Greeting";

export default function Home() {
  const shouldRenderBreak = useBreakpointValue({
    base: "true",
    lg: false,
  });

  return (
    <>
      <Head>
        <title>Michiel Glibert</title>
        <meta
          name="description"
          content="Michiel Glibert, a software engineer based in Ghent, specializes in Front-End development but also boasts a wide range of technical expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        bg="#000020"
        variant="white"
        containerProps={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <VStack
          pos="relative"
          align="flex-start"
          justify="center"
          h="100%"
          spacing={{ base: "8", laptop: "10", laptopL: "16" }}
          maxW="7xl"
          margin="0 auto"
        >
          <Greeting />
          <GreetingDescription />
        </VStack>
      </AppShell>
    </>
  );
}
