import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface Props {}

const ContactForm: React.FC<Props> = () => {
  return (
    <Card as={VStack} spacing="4" h="100%" w="100%" p="8" align="flex-start">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Subject</FormLabel>
        <Input />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea rows={5} />
      </FormControl>
      <Button size="lg" borderRadius="full" px="12">
        Send
      </Button>
    </Card>
  );
};

export default ContactForm;
