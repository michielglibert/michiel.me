import React, { PropsWithChildren } from "react";
import Section from "../about/Section";
import ContactForm from "./ContactForm";

const RightSection: React.FC<PropsWithChildren> = () => {
  return (
    <Section title="Message me" maxW="100%" childProps={{ maxW: "520px" }}>
      <ContactForm />
    </Section>
  );
};

export default RightSection;
