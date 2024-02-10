import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import NextButton from "../common/NextButton";
import BlogDate from "./BlogDate";

export interface BlogProps {
  title: string;
  description: string;
  date: Date;
  readTime: number;
  imgSrc: string;
}

type BlogItemProps = BlogProps & {
  to: string;
};

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  description,
  date,
  readTime,
  imgSrc,
  to,
}) => {
  return (
    <HStack spacing="10" maxW="5xl">
      <Box
        pos="relative"
        w="100%"
        h="52"
        bg="gray.background"
        borderRadius="lg"
        border="1px solid"
        borderColor="gray.border"
      >
        <Image src={imgSrc} alt="blog" fill style={{ objectFit: "contain" }} />
      </Box>
      <VStack spacing="6" align="stretch">
        <VStack spacing="2" align="stretch" flexGrow={1}>
          <BlogDate date={date} readTime={readTime} textStyle="small" />
          <Text textStyle="h5">{title}</Text>
          <Text>{description}</Text>
        </VStack>
        <NextButton to={to}>Read</NextButton>
      </VStack>
    </HStack>
  );
};

export default BlogItem;
