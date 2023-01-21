import React, { Children, PropsWithChildren } from "react";
import Content from "./Content";
import Section from "./Section";

const AboutMe: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Section title="Hi there!">
      <Content />
      {children}
    </Section>
  );
};

export default AboutMe;
