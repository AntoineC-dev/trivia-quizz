import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { RepeatIcon } from "@chakra-ui/icons";
import { ButtonGroup } from "@chakra-ui/react";
import { useQuestionsCount } from "../../controllers";
import { ROUTES } from "../../navigation";
import { RouterButton, RouterIconButton } from "../router";

export const QuestionActions = ({ index }: { index: number }) => {
  const questionsCount = useQuestionsCount();
  return (
    <ButtonGroup spacing={4}>
      <RouterIconButton
        to={ROUTES.question(index - 1)}
        aria-label={`Previous question`}
        icon={<ArrowBackIcon />}
        size="md"
        fontSize="lg"
        color="current"
        isDisabled={index === 0}
      />
      <RouterButton variant="ghost" to={ROUTES.home} rightIcon={<RepeatIcon />}>
        Restart
      </RouterButton>
      {index === questionsCount - 1 ? (
        <RouterButton to={ROUTES.results}>Show results</RouterButton>
      ) : (
        <RouterIconButton
          to={ROUTES.question(index + 1)}
          aria-label={`Next question`}
          icon={<ArrowForwardIcon />}
          size="md"
          fontSize="lg"
          color="current"
        />
      )}
    </ButtonGroup>
  );
};
