import { TriviaQuestion } from "../types";
import { shuffleArray } from "./shuffleArray";

export const formatTriviaQuestion = (question: TriviaQuestion) => {
  if (question.type === "multiple") {
    const answers = shuffleArray([question.correct_answer, ...question.incorrect_answers]);
    return { question: question.question, answers, correct_answer: question.correct_answer };
  }
  return { question: question.question, correct_answer: question.correct_answer };
};
