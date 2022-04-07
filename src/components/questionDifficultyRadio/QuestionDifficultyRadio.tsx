import { Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { API_DIFFICULTIES } from "../../api";
import { useDifficulty, useSetConfig } from "../../controllers";
import { TriviaDifficulty } from "../../types";

export const QuestionDifficultyRadio = () => {
  const difficulty = useDifficulty();
  const setConfig = useSetConfig();
  return (
    <VStack w="100%" spacing={4}>
      <Text as="h3" fontSize="lg">
        Choose a difficulty:
      </Text>
      <RadioGroup onChange={(next) => setConfig({ difficulty: next as TriviaDifficulty })} value={difficulty}>
        <Stack direction="row" spacing={4}>
          {API_DIFFICULTIES.map((difficulty) => (
            <Radio key={difficulty} value={difficulty} size="lg">
              {difficulty.toUpperCase()}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </VStack>
  );
};
