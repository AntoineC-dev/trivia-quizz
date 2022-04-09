import * as React from "react";
import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useQuestionsCount } from "../controllers";
import { Outlet } from "react-router-dom";

export const Quizz = () => {
  const questionsCount = useQuestionsCount();
  return (
    <VStack spacing={8} w="100%" maxW="lg" justifySelf="center">
      {questionsCount === 0 ? (
        <VStack spacing={8} w="100%">
          <Heading as="span">Good luck, have fun!</Heading>
          <Text>The quizz will be ready soon</Text>
          <Spinner thickness="6px" speed="0.55s" size="xl" />
        </VStack>
      ) : (
        <Outlet />
      )}
    </VStack>
  );
};
