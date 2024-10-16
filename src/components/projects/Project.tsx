import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Tag,
  Wrap,
  Box,
} from "@chakra-ui/react";
import {
  IconBuilding,
  IconExternalLink,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import React from "react";

interface Props {
  projectTitle: string;
  projectDescription: string;
  year: string;
  organization?: string;
  isSolo?: boolean;
  projectTags: string[];
  imgSrc: string;
  imgAlt: string;
  href?: string;
}

const Project: React.FC<Props> = ({
  projectTitle,
  projectDescription,
  year,
  organization,
  isSolo,
  projectTags,
  imgSrc,
  imgAlt,
  href,
}) => {
  return (
    <Card
      as="a"
      maxW="sm"
      cursor={href != null ? "pointer" : "default"}
      target="_blank"
      href={href}
      border="1px"
      borderColor="gray.100"
      overflow="hidden"
      _hover={
        href && {
          boxShadow: "md",
        }
      }
      transition="box-shadow 0.2s"
    >
      <Image src={imgSrc} alt={imgAlt} />
      <CardBody as={VStack} spacing={4}>
        <VStack spacing="3" align="flex-start" w="100%">
          <VStack align="stretch" spacing="1">
            <HStack>
              <Heading size="md">{projectTitle}</Heading>
              {href && <IconExternalLink />}
            </HStack>
            <Text color="gray.500" textStyle="small">
              {year}
            </Text>
          </VStack>
          <Text>{projectDescription}</Text>
          <Wrap>
            {organization && (
              <Tag size="md" variant="outline">
                <Box pr={1}>
                  <IconBuilding size={14} />
                </Box>
                {organization}
              </Tag>
            )}
            <Tag colorScheme="red" size="md" variant="outline">
              {isSolo ? (
                <>
                  <Box pr={1}>
                    <IconUser size={14} />
                  </Box>
                  Solo
                </>
              ) : (
                <>
                  <Box pr={1}>
                    <IconUsersGroup size={14} />
                  </Box>
                  Team
                </>
              )}
            </Tag>
            {projectTags.map((tag, index) => (
              <Tag colorScheme="blue" size="md" key={index} variant="outline">
                {tag}
              </Tag>
            ))}
          </Wrap>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default Project;
