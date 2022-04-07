import * as React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import {
  QuestionAmountInput,
  QuestionCategorySelect,
  QuestionDifficultyRadio,
  QuestionInputGroup,
  RouterButton,
} from "../../components";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ROUTES } from "../../navigation";

export const Home = () => {
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
      <QuestionInputGroup title="Number of question(s):">
        <QuestionAmountInput />
      </QuestionInputGroup>
      <QuestionInputGroup title="Category:">
        <QuestionCategorySelect />
      </QuestionInputGroup>
      <QuestionInputGroup title="Difficulty:">
        <QuestionDifficultyRadio />
      </QuestionInputGroup>
      <RouterButton to={ROUTES.quizz} size="lg" rightIcon={<ArrowForwardIcon />}>
        Start the quizz
      </RouterButton>
    </VStack>
  );
};
