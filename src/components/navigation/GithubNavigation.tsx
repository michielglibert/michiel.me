import { Link } from "@chakra-ui/react";
import React from "react";
import { useVariant } from "../../store/VariantContext";
import GithubIcon from "../../theme/icons/GithubIcon";
import { Variant } from "../../types/Variant";

const GithubNavigation: React.FC = () => {
  const variant = useVariant();

  return (
    <Link
      href="https://github.com/michielglibert"
      color={variant}
      isExternal
      display="flex"
      justifyContent="center"
      alignItems="center"
      pos="relative"
      as="a"
      w="10"
      h="10"
      cursor="pointer"
      _hover={{
        tablet: {
          color: variant === "black" ? "white" : "black",
          _before: {
            transform: "scale(1)",
          },
        },
      }}
      transform="scale(1)"
      _before={{
        display: { base: "none", tablet: "block" },
        backgroundColor: variant,
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
