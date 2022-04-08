export interface TriviaCategory {
  id: number;
  name: string;
}

export type TriviaDifficulty = "easy" | "medium" | "hard";
export type TriviaResponseCode = 0 | 1 | 2 | 3 | 4;
export type TriviaQuestionType = "multiple" | "boolean";

export interface TriviaQuestion {
  category: string;
  type: "multiple" | "boolean";
  difficulty: TriviaDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
