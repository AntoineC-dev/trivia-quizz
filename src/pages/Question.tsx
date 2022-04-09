import * as React from "react";
import { VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { QuestionActions, QuestionDisplay, QuestionNavigation } from "../components";

export const Question = () => {
  const { questionIndex } = useParams();
  const index = React.useMemo(() => Number(questionIndex), [questionIndex]);
  return (
    <VStack spacing={8} w="100%">
      <QuestionDisplay index={index} />
      <QuestionActions index={index} />
      <QuestionNavigation index={index} />
    </VStack>
  );
};
