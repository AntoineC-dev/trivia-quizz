import * as React from "react";
import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useInitializeQuizz, useQuestions } from "../../controllers";
import { QuestionDisplay } from "../../components";

export const Quizz = () => {
  const questions = useQuestions();
  const initializeQuizz = useInitializeQuizz();
  React.useEffect(() => {
    initializeQuizz();
  }, [initializeQuizz]);
  return (
    <VStack spacing={8} w="100%" maxW="lg" justifySelf="center">
      {questions.length === 0 ? (
        <VStack spacing={8}>
          <Heading as="span">Good luck, have fun!</Heading>
          <Text>The quizz will be ready soon</Text>
          <Spinner thickness="6px" speed="0.55s" size="xl" />
        </VStack>
      ) : (
        <QuestionDisplay {...questions[0]} index={0} />
      )}
    </VStack>
  );
};
