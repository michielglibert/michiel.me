import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import UnderlineEffect from "../common/UnderlineEffect";

interface Props {
  title: string;
  to: string;
}

const NavigationItem: React.FC<LinkProps & Props> = ({
  to,
  title,
  ...props
}) => {
  return (
    <UnderlineEffect>
      <Link
        href={to}
        as={NextLink}
        fontSize="xl"
        fontWeight="semibold"
        letterSpacing="3px"
        // Seems like the NextLink component adds underline
        textDecoration="none !important"
        {...props}
      >
        {title}
      </Link>
    </UnderlineEffect>
  );
};

export default NavigationItem;
