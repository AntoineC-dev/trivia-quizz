import { State } from "zustand";
import { TriviaCategory, TriviaDifficulty } from "./trivia.types";

export interface ConfigState {
  amount: number;
  category: TriviaCategory["id"];
  difficulty: TriviaDifficulty;
}
export type ConfigParams = Partial<ConfigState>;

export type QuizzStatus = "initial" | "completing" | "completed";
export interface QuizzState {
  questions: StoreQuestion[];
  results: StoreAnswer[];
  score: number;
  questionsCount: number;
  status: QuizzStatus;
}

export interface StoreQuestion {
  question: string;
  correct_answer: string;
  answers?: string[];
}

export interface StoreAnswer {
  answer: string;
  isValid: boolean;
}

export interface StoreState extends State {
  token: string | null;
  config: ConfigState;
  setConfig: (params: ConfigParams) => void;
  quizz: QuizzState;
  setQuizzStatus: (status: QuizzStatus) => void;
  initializeQuizz: () => void;
  resetQuizz: () => void;
  updateResults: (params: { index: number; answer: string }) => void;
}
