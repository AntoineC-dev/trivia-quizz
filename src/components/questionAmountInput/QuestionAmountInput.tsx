import { Button, HStack, Input, Text, useNumberInput, VStack } from "@chakra-ui/react";
import { useAmount, useSetConfig } from "../../controllers";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const QuestionAmountInput = () => {
  const amount = useAmount();
  const setConfig = useSetConfig();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: amount,
    min: 1,
    max: 10,
    allowMouseWheel: true,
    onChange: (_, value) => setConfig({ amount: value }),
  });
  const increment = getIncrementButtonProps();
  const decrement = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <VStack w="100%" spacing={4}>
      <Text as="h3" fontSize="lg">
        Number of questions:
      </Text>
      <HStack w="100%">
        <Button {...decrement}>
          <MinusIcon />
        </Button>
        <Input {...input} textAlign="center" />
        <Button {...increment}>
          <AddIcon />
        </Button>
      </HStack>
    </VStack>
  );
};
