import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Manrope } from "@next/font/google";
import theme from "../theme";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    emailjs.init("KZubLL2bPuFGIRR1t");
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
