import { BoxProps, ColorProps, Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import UnderlineEffect from "../common/UnderlineEffect";

interface Props {
  color?: ColorProps["color"];
  title: string;
  to: string;
}

const NavigationItem: React.FC<LinkProps & Props> = ({
  color,
  to,
  title,
  ...props
}) => {
  return (
    <UnderlineEffect color={color}>
      <Link
        href={to}
        as={NextLink}
        fontSize="xl"
        fontWeight="semibold"
        letterSpacing="3px"
        // Seems like the NextLink component adds underline
        textDecoration="none !important"
        color={color}
        {...props}
      >
        {title}
      </Link>
    </UnderlineEffect>
  );
};

export default NavigationItem;
