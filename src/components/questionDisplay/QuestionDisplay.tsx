import { ButtonGroup, Heading, IconButton, Text, VStack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { decodeHtml } from "../../helpers";
import { StoreQuestion } from "../../types";
import { BooleanTypeDisplay } from "./BooleanTypeDisplay";
import { MultipleTypeDisplay } from "./MultipleTypeDisplay";
import { ROUTES } from "../../navigation";
import { RouterButton } from "../router/RouterButton";

export const QuestionDisplay = ({ index, question, answers }: StoreQuestion & { index: number }) => {
  return (
    <VStack spacing={8}>
      <Heading as="h2" size="lg">
        Question {index + 1} :
      </Heading>
      <Text fontSize="xl">{decodeHtml(question)}</Text>
      {answers ? <BooleanTypeDisplay /> : <MultipleTypeDisplay answers={answers} />}
      <ButtonGroup variant="outline">
        <IconButton aria-label={`Previous question`} icon={<ArrowBackIcon />} size="md" fontSize="lg" color="current" />
        <RouterButton variant="ghost" to={ROUTES.home}>
          Restart
        </RouterButton>
        <IconButton aria-label={`Next question`} icon={<ArrowForwardIcon />} size="md" fontSize="lg" color="current" />
      </ButtonGroup>
    </VStack>
  );
};
