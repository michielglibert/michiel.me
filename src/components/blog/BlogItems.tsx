import { VStack } from "@chakra-ui/react";
import React from "react";
import BlogItem from "./BlogItem";

const BlogItems: React.FC = () => {
  return (
    <VStack spacing="10">
      <BlogItem
        date={new Date("2023-11-27")}
        readTime={10}
        title="Fixing a Memory Leak in a Production Node.js App"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a magna et leo sagittis rutrum ac vel quam. Duis sollicitudin felis id nisl suscipit, dignissim molestie ligula lacinia. Duis sollicitudin felis id nisl suscipit, dignissim molestie ligula lacinia."
        imgSrc="/images/wegroup.png"
        to="/blog/test-article"
      />
    </VStack>
  );
};

export default BlogItems;
