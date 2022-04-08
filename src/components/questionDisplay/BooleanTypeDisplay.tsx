import * as React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export const BooleanTypeDisplay = () => {
  const [answer, setAnswer] = React.useState<string | undefined>();
  return (
    <RadioGroup value={answer} onChange={(value) => setAnswer(value)} size="lg">
      <Stack direction="row" spacing={4}>
        <Radio value="True">True</Radio>
        <Radio value="False">False</Radio>
      </Stack>
    </RadioGroup>
  );
};
