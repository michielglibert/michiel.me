import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Hamburger: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 448 512" {...props}>
      <path
        fill="currentColor"
        d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
      ></path>
    </Icon>
  );
};

export default Hamburger;
