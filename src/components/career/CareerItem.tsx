import {
  Box,
  Center,
  GridItem,
  HStack,
  Link,
  SimpleGrid,
  Tag,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CareerLine from "./CareerLine";

interface Props {
  jobTitle: string;
  jobDescription: string;
  jobTags: [string, string];
  imgSrc: string;
  href?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const CareerItem: React.FC<Props> = ({
  jobTitle,
  jobDescription,
  jobTags,
  imgSrc,
  href,
  isFirst,
  isLast,
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
    <Center bg="gray.background">
      <SimpleGrid columns={12} maxW="6xl" bg="gray.background">
        <GridItem gridColumn="span 1" justifySelf="center">
          <CareerLine isFirst={isFirst} isLast={isLast} />
        </GridItem>
        <HStack gridColumn="span 11" spacing="12" align="center" p="8" pl="0">
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
            flexShrink={0}
            pos="relative"
            bg="white"
            w="80"
            h="40"
            borderRadius="lg"
            display={{ base: "none", tablet: "block" }}
          >
            <Image
              src={imgSrc}
              alt={jobTags[0]}
              fill
              style={{ objectFit: "contain", padding: "32px" }}
            />
          </Center>
        </HStack>
      </SimpleGrid>
    </Center>
  );
};

export default CareerItem;
