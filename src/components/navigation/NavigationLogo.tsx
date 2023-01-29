import { Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavigationLogo: React.FC = () => {
  return (
    <Link href="/">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="3px">
        <Text as="span" color="#4DA1A9">
          M
        </Text>
        ichiel
      </Text>
    </Link>
  );
};

export default NavigationLogo;
