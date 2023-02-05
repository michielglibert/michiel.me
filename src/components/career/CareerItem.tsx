import {
  Center,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  jobTitle: string;
  jobDescription: string;
  jobTags: [string, string];
  imgSrc: string;
  href?: string;
}

const CareerItem: React.FC<Props> = ({
  jobTitle,
  jobDescription,
  jobTags,
  imgSrc,
  href,
}) => {
  const hrefProps = {
    as: Link,
    cursor: "pointer",
    href,
    isExternal: true,
    transition: "300ms",
    _hover: {
      bg: "gray.100",
    },
  };

  return (
    <Center bg="gray.background" p="8">
      <HStack spacing="12" maxW="6xl" align="center">
        <VStack align="stretch">
          <Text textStyle="h3">{jobTitle}</Text>
          <HStack>
            <Tag
              colorScheme="orange"
              variant="outline"
              {...(href && hrefProps)}
            >
              {jobTags[0]}
            </Tag>
            <Tag colorScheme="yellow" variant="outline">
              {jobTags[1]}
            </Tag>
          </HStack>
          <Text textStyle="large">{jobDescription}</Text>
        </VStack>
        <Center
          bg="white"
          p="12"
          maxW="sm"
          maxH="44"
          borderRadius="lg"
          display={{ base: "none", tablet: "block" }}
        >
          <Image src={imgSrc} alt="Wegroup" objectPosition="center" />
        </Center>
      </HStack>
    </Center>
  );
};

export default CareerItem;
