import * as React from "react";
import { Wrap } from "@chakra-ui/react";
import { useQuestions, useResults, useStatus } from "../../controllers";
import { ROUTES } from "../../navigation";
import { RouterButton } from "../router";

export const QuestionNavigation = ({ index }: { index: number }) => {
  const questions = useQuestions();
  const quizzStatus = useStatus();
  const results = useResults();
  const colorScheme = (i: number) => (results[i].isValid ? "green" : "red");

  return (
    <Wrap justify="center">
      {questions.map((_, i) => (
        <RouterButton
          to={ROUTES.question(i)}
          isActive={i === index}
          colorScheme={quizzStatus === "completed" ? colorScheme(i) : "gray"}>
          {i + 1}
        </RouterButton>
      ))}
    </Wrap>
  );
};
