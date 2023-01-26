import { BoxProps, ColorProps, Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
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
  const { pathname } = useRouter();

  return (
    <UnderlineEffect isActive={pathname === to} color={color}>
      <Link
        href={to}
        as={NextLink}
        textStyle="large"
        fontWeight="semibold"
        letterSpacing="0.2rem"
        // Important to override the default styles
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
