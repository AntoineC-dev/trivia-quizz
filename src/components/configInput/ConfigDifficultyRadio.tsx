import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { API_DIFFICULTIES } from "../../api";
import { useDifficulty, useSetConfig } from "../../controllers";
import { TriviaDifficulty } from "../../types";

export const ConfigDifficultyRadio = () => {
  const difficulty = useDifficulty();
  const setConfig = useSetConfig();
  return (
    <RadioGroup onChange={(next) => setConfig({ difficulty: next as TriviaDifficulty })} value={difficulty}>
      <Stack direction="row" spacing={4}>
        {API_DIFFICULTIES.map((difficulty) => (
          <Radio key={difficulty} value={difficulty} size="md">
            {difficulty.toUpperCase()}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};
