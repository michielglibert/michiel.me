import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import SendIcon from "../../theme/icons/Send";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();
  const toast = useToast();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await fetch("https://formspree.io/f/xvonzape", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await response.json();
      toast({
        title: "Message sent!",
        description:
          "I have received your message and will try to answer it soon.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Oops, something went wrong!",
        description:
          "I have not received your message, please contact me at michiel.glibert@gmail.com",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  });

  return (
    <Card as={VStack} spacing="4" h="100%" w="100%" p="8" align="flex-start">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input {...register("name", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input {...register("email", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Subject</FormLabel>
        <Input {...register("subject", { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea rows={5} {...register("message", { required: true })} />
      </FormControl>
      <Button
        size="lg"
        rightIcon={<SendIcon />}
        isLoading={isSubmitting}
        onClick={onSubmit}
      >
        Send
      </Button>
    </Card>
  );
};

export default ContactForm;
