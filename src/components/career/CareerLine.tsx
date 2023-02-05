import { Box, Circle } from "@chakra-ui/react";
import React from "react";

interface Props {
  isFirst?: boolean;
  isLast?: boolean;
}

const CareerLine: React.FC<Props> = ({ isFirst, isLast }) => {
  return (
    <Box
      display={{ base: "none", mobileM: "block" }}
      w={{ base: "1", tabletS: "1.5", laptopL: "2" }}
      h="120%"
      bg="primary.main"
      pos="relative"
    >
      {isFirst && (
        <Box
          pos="absolute"
          display={{ base: "none", mobileM: "block" }}
          w="40"
          h={{ base: "1", tabletS: "1.5", laptopL: "2" }}
          bg="red"
          right="100%"
          bottom="110%"
          border="1px solid red"
          borderRadius="lg"
          _after={{
            content: '""',
            pos: "absolute",
            top: "-5px",
            left: "50%",
            w: "100px",
            h: "100%",
            transform: "rotate(45deg)",
            border: {
              base: "3px solid white",
              tabletS: "4px solid white",
              laptopL: "6px solid white",
            },
            borderTopColor: {
              base: "primary.main",
              tabletS: "primary.main",
              laptopL: "primary.main",
            },
            borderRadius: "50%",
          }}
        />
      )}
      <Circle
        pos="absolute"
        bg="white"
        size={{ base: "4", tabletS: "6", laptopL: "8" }}
        border={{
          base: "3px solid",
          tabletS: "4px solid ",
          laptopL: "6px solid",
        }}
        borderColor={{
          base: "primary.main",
          tabletS: "primary.main",
          laptopL: "primary.main",
        }}
        top="10"
        left="50%"
        transform="translateX(-50%)"
      />
    </Box>
  );
};

export default CareerLine;
