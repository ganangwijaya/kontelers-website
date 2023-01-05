import Head from "next/head";

import { Container, Heading, IconButton, useColorMode } from "@chakra-ui/react";

import { HiArrowNarrowDown, HiMoon } from "react-icons/hi";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Kontelers — Kontrakan Telkom & BM PNJ</title>
        <meta
          name="description"
          content="Website informasi untuk para kontelers @kontrakantelkom_pnj."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container
          maxW={"full"}
          h={"100vh"}
          p={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Heading>Kontelers ni bos.</Heading>
          <IconButton
            aria-label="Switch Theme"
            position={"absolute"}
            top={4}
            right={4}
            rounded={"full"}
            icon={<HiMoon />}
            onClick={() => toggleColorMode()}
          />
        </Container>
      </main>
    </>
  );
};

export default Home;
