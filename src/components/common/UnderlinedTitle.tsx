import { Text } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const UnderlinedTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text
      display="inline-block"
      pos="relative"
      textStyle="h2"
      lineHeight="150%"
      _after={{
        pos: "absolute",
        width: "100%",
        content: '""',
        h: "1",
        bottom: "0",
        left: "0",
        bg: "#4DA1A9",
      }}
    >
      {children}
    </Text>
  );
};

export default UnderlinedTitle;
