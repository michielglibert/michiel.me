import { Box, Center, Link } from "@chakra-ui/react";
import React from "react";
import GithubIcon from "../../../theme/icons/GithubIcon";

interface Props {}

const GithubNavigation: React.FC<Props> = () => {
  return (
    <Link
      href="https://github.com/michielglibert"
      isExternal
      display="flex"
      justifyContent="center"
      alignItems="center"
      pos="relative"
      as="a"
      color="white"
      w="10"
      h="10"
      cursor="pointer"
      _hover={{
        color: "black",
        _before: {
          transform: "scale(1)",
        },
      }}
      transform="scale(1)"
      _before={{
        backgroundColor: "white",
        borderRadius: "full",
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        top: 0,
        transform: "scale(0)",
        transitionDuration: "300ms",
      }}
    >
      <GithubIcon pos="relative" boxSize={6} />
    </Link>
  );
};

export default GithubNavigation;
