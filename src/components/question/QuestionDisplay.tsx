import { Code, Heading, Radio, RadioGroup, Text, Wrap } from "@chakra-ui/react";
import { useQuestionByIndex, useResultByIndex, useStatus, useUpdateResults } from "../../controllers";
import { decodeHtml } from "../../helpers";

export const QuestionDisplay = ({ index }: { index: number }) => {
  const updateResults = useUpdateResults();
  const result = useResultByIndex(index);
  const { question, answers, correct_answer } = useQuestionByIndex(index);
  const quizzStatus = useStatus();
  return (
    <>
      <Heading as="h1" size="lg">
        Question n°{index + 1} :
      </Heading>
      <Text fontSize="xl">{decodeHtml(question)}</Text>
      {quizzStatus === "completed" && (
        <Code colorScheme={result.answer === correct_answer ? "green" : "red"} fontSize="xl">
          Correct answer: {decodeHtml(correct_answer)}
        </Code>
      )}
      <RadioGroup
        value={result.answer}
        onChange={(value) => updateResults({ index, answer: value })}
        size="lg"
        isDisabled={quizzStatus === "completed"}>
        <Wrap justify="center" spacing={4}>
          {answers ? (
            answers.map((value) => (
              <Radio key={value} value={value}>
                {decodeHtml(value)}
              </Radio>
            ))
          ) : (
            <>
              <Radio value="True">True</Radio>
              <Radio value="False">False</Radio>
            </>
          )}
        </Wrap>
      </RadioGroup>
    </>
  );
};
