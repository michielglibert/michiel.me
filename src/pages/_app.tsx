import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    emailjs.init("KZubLL2bPuFGIRR1t");
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
