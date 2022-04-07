import * as React from "react";
import { Text, VStack } from "@chakra-ui/react";

interface QuestionInputGroupProps {
  title: string;
  children: React.ReactNode;
}

export const QuestionInputGroup = ({ children, title }: QuestionInputGroupProps) => {
  return (
    <VStack w="100%" spacing={4}>
      <Text as="h3" fontSize="lg">
        {title}
      </Text>
      {children}
    </VStack>
  );
};
