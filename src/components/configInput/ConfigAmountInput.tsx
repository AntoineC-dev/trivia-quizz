import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { useAmount, useSetConfig } from "../../controllers";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const ConfigAmountInput = () => {
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
    <HStack w="100%">
      <Button {...decrement}>
        <MinusIcon />
      </Button>
      <Input {...input} textAlign="center" />
      <Button {...increment}>
        <AddIcon />
      </Button>
    </HStack>
  );
};
