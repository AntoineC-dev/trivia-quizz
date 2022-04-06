import * as React from "react";
import { ChakraProvider, VStack, Grid, theme, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Heading as="h1">Quizz</Heading>
      </VStack>
    </Grid>
  </ChakraProvider>
);
