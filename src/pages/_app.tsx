import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Manrope } from "@next/font/google";
import theme from "../theme";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={manrope.className} overflowX="auto">
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
