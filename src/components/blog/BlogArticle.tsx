import { Box, Center, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import PreviousButton from "../common/PreviousButton";
import BlogDate from "./BlogDate";
import { BlogProps } from "./BlogItem";

const BlogArticle: React.FC<PropsWithChildren<BlogProps>> = ({
  title,
  description,
  date,
  imgSrc,
  readTime,
  children,
}) => {
  return (
    <Center>
      <VStack w="4xl" align="stretch" spacing="4" divider={<Divider />}>
        <VStack spacing="8" align="stretch">
          <PreviousButton to="/blog">Back to articles</PreviousButton>
          <Box
            pos="relative"
            h="80"
            w="100%"
            bg="gray.background"
            borderRadius="xl"
          >
            <Image
              src={imgSrc}
              alt="blog"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <VStack align="stretch">
            <Text textStyle="h3" fontWeight="semibold">
              {title}
            </Text>
            <Text textStyle="large" color="gray.title">
              {description}
            </Text>
            <BlogDate date={date} readTime={readTime} />
          </VStack>
        </VStack>
        <Box w="100%">{children}</Box>
      </VStack>
    </Center>
  );
};

export default BlogArticle;
