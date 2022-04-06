import { Grid, Heading, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../components";

export const Home = () => {
  return (
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Heading as="h1">Quizz</Heading>
      </VStack>
    </Grid>
  );
};
