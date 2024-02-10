import { Text, TextProps } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";

interface Props {
  readTime: number;
  date: Date;
}

const BlogDate: React.FC<Props & TextProps> = ({
  readTime,
  date,
  ...props
}) => {
  return (
    <Text color="umber" {...props}>
      {format(date, "MMMM do, yyyy")} - {readTime} min read
    </Text>
  );
};

export default BlogDate;
