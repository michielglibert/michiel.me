import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import CareerButtons from "../components/career/CareerButtons";
import CareerItem from "../components/career/CareerItem";
import CareerItems from "../components/career/CareerItems";
import AppShell from "../components/common/AppShell";
import NextButton from "../components/common/NextButton";

const Career: NextPage = () => {
  return (
    <>
      <Head>
        <title>Career | Michiel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell variant="black" p="0">
        <VStack spacing="8">
          <CareerItems />
          <CareerButtons />
        </VStack>
      </AppShell>
    </>
  );
};

export default Career;
