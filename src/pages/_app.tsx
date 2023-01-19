import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box as="main" className={manrope.className} h="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
