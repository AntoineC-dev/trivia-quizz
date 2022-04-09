import * as React from "react";
import { CheckCircleIcon, RepeatIcon } from "@chakra-ui/icons";
import { ButtonGroup, Code, Heading, VStack } from "@chakra-ui/react";
import { RouterButton } from "../components";
import { useQuestionsCount, useScore, useSetQuizzStatus } from "../controllers";
import { ROUTES } from "../navigation";

export const Results = () => {
  const score = useScore();
  const questionsCount = useQuestionsCount();
  const setQuizzStatus = useSetQuizzStatus();
  React.useEffect(() => {
    setQuizzStatus("completed");
  }, [setQuizzStatus]);
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
      <ButtonGroup size="lg">
        <RouterButton to={ROUTES.home} rightIcon={<RepeatIcon />} variant="ghost">
          Restart
        </RouterButton>
        <RouterButton to={ROUTES.question(0)} rightIcon={<CheckCircleIcon />} colorScheme="green">
          Show correct answers
        </RouterButton>
      </ButtonGroup>
    </VStack>
  );
};
