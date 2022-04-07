export interface TriviaCategory {
  id: number;
  name: string;
}

export type TriviaDifficulty = "easy" | "medium" | "hard";
export type TriviaResponseCode = 0 | 1 | 2 | 3 | 4;
export type TriviaQuestionType = "multiple" | "boolean";

export interface TriviaQuestionMultiple {
  category: string;
  type: "multiple";
  difficulty: TriviaDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
}

export interface TriviaQuestionBoolean {
  category: string;
  type: "boolean";
  difficulty: TriviaDifficulty;
  question: string;
  correct_answer: boolean;
  incorrect_answer: boolean;
}

export type TriviaQuestion = TriviaQuestionBoolean | TriviaQuestionMultiple;
