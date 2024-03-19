import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Stack,
  VStack,
  Tag,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  projectTitle: string;
  projectDescription: string;
  year: number;
  projectTags: string[];
  imgSrc: string;
  imgAlt: string;
  href?: string;
}

const Project: React.FC<Props> = ({
  projectTitle,
  projectDescription,
  year,
  projectTags,
  imgSrc,
  imgAlt,
  href,
}) => {
  return (
    <Card
      as="a"
      maxW="sm"
      cursor="pointer"
      target="_blank"
      href={href}
      border="1px"
      borderColor="gray.100"
      overflow="hidden"
    >
      <Image src={imgSrc} alt={imgAlt} />
      <CardBody as={VStack} spacing={4}>
        <VStack spacing="3" align="flex-start" w="100%">
          <VStack align="stretch" spacing="1">
            <Heading size="md">{projectTitle}</Heading>
            <Text color="gray.500" textStyle="small">
              {year}
            </Text>
          </VStack>
          <Text>{projectDescription}</Text>
          {/* <Wrap>
            {projectTags.map((tag, index) => (
              <Tag key={index} variant="outline">
                {tag}
              </Tag>
            ))}
          </Wrap> */}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default Project;
