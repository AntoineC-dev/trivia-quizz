import * as React from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Code, Heading, VStack } from "@chakra-ui/react";
import { RouterButton } from "../components";
import { useQuestionsCount, useScore } from "../controllers";
import { ROUTES } from "../navigation";

export const Results = () => {
  const score = useScore();
  const questionsCount = useQuestionsCount();
  return (
    <VStack spacing={8} w="100%" maxW="lg" justifySelf="center">
      <VStack spacing={4}>
        <Heading as="h1" size="3xl">
          Results
        </Heading>
        <Heading as="h2" size="md" lineHeight={1.4}>
          Your final score is:
        </Heading>
        <Code fontSize="4xl">
          {score}/{questionsCount}
        </Code>
      </VStack>
      <RouterButton to={ROUTES.home} size="lg" rightIcon={<RepeatIcon />}>
        Restart the quizz
      </RouterButton>
    </VStack>
  );
};
