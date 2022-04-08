import * as React from "react";
import { Radio, RadioGroup, Wrap } from "@chakra-ui/react";
import { StoreQuestion } from "../../types";
import { decodeHtml } from "../../helpers";

export const MultipleTypeDisplay = (props: Pick<StoreQuestion, "answers">) => {
  const [answer, setAnswer] = React.useState<string | undefined>();
  return (
    <RadioGroup value={answer} onChange={(value) => setAnswer(value)}>
      <Wrap justify="center" spacing={4}>
        {props.answers!.map((answer) => (
          <Radio key={answer} value={answer} size="lg">
            {decodeHtml(answer)}
          </Radio>
        ))}
      </Wrap>
    </RadioGroup>
  );
};
