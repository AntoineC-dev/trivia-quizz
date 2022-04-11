import { Wrap } from "@chakra-ui/react";
import { useQuestions, useResults, useStatus } from "../../controllers";
import { ROUTES } from "../../navigation";
import { RouterButton } from "../router";

export const QuestionNavigation = ({ index }: { index: number }) => {
  const questions = useQuestions();
  const quizzStatus = useStatus();
  const results = useResults();
  const buttonColorScheme = (i: number) => {
    if (quizzStatus !== "completed") return "gray";
    return results[i].isValid ? "green" : "red";
  };
  const buttonVariant = (i: number) =>
    results[i].answer.length === 0 && quizzStatus !== "completed" ? "ghost" : "solid";

  return (
    <Wrap justify="center">
      {questions.map((_, i) => (
        <RouterButton
          to={ROUTES.question(i)}
          isActive={i === index}
          variant={buttonVariant(i)}
          colorScheme={buttonColorScheme(i)}>
          {i + 1}
        </RouterButton>
      ))}
    </Wrap>
  );
};
