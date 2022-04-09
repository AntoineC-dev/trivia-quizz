import * as React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import {
  ConfigAmountInput,
  ConfigCategorySelect,
  ConfigDifficultyRadio,
  ConfigInputGroup,
  RouterButton,
} from "../components";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ROUTES } from "../navigation";
import { useQuestionsCount, useResetQuizz } from "../controllers";

export const Home = () => {
  const questionsCount = useQuestionsCount();
  const resetQuizz = useResetQuizz();
  React.useEffect(() => {
    if (questionsCount !== 0) resetQuizz();
  }, [questionsCount, resetQuizz]);
  return (
    <VStack spacing={8} w="100%" maxW="lg" justifySelf="center">
      <VStack spacing={4}>
        <Heading as="h1" size="3xl">
          Trivia Quizz
        </Heading>
        <Heading as="h2" size="md" lineHeight={1.4}>
          The Open Trivia Database provides a completely free JSON API for use in programming projects.
        </Heading>
      </VStack>
      <ConfigInputGroup title="Number of question(s):">
        <ConfigAmountInput />
      </ConfigInputGroup>
      <ConfigInputGroup title="Category:">
        <ConfigCategorySelect />
      </ConfigInputGroup>
      <ConfigInputGroup title="Difficulty:">
        <ConfigDifficultyRadio />
      </ConfigInputGroup>
      <RouterButton to={ROUTES.question(0)} size="lg" rightIcon={<ArrowForwardIcon />}>
        Start the quizz
      </RouterButton>
    </VStack>
  );
};
