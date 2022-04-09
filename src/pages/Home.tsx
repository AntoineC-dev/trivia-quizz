import * as React from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import { ConfigAmountInput, ConfigCategorySelect, ConfigDifficultyRadio, ConfigInputGroup } from "../components";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ROUTES } from "../navigation";
import { useInitializeQuizz, useResetQuizz, useStatus } from "../controllers";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const quizzStatus = useStatus();
  const resetQuizz = useResetQuizz();
  const navigate = useNavigate();
  const initializeQuizz = useInitializeQuizz();
  const onStartQuizz = () => {
    initializeQuizz();
    navigate(ROUTES.question(0));
  };
  React.useEffect(() => {
    if (quizzStatus !== "initial") resetQuizz();
  }, [quizzStatus, resetQuizz]);
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
      <Button onClick={onStartQuizz} size="lg" rightIcon={<ArrowForwardIcon />}>
        Start the quizz
      </Button>
    </VStack>
  );
};
