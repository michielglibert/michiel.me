import {
  Center,
  HStack,
  Link,
  Tag,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  jobTitle: string;
  jobDescription: string;
  jobTags: string[];
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

            {jobTags.slice(1).map((tag, index) => (
              <Tag key={index} colorScheme="yellow" variant="outline">
                {tag}
              </Tag>
            ))}
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
    </Center>
  );
};

export default CareerItem;
