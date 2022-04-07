import { State } from "zustand";
import { TriviaCategory, TriviaDifficulty, TriviaQuestion } from "./trivia.types";

export interface ConfigState {
  amount: number;
  category: TriviaCategory["id"];
  difficulty: TriviaDifficulty;
}

export type ConfigParams = Partial<ConfigState>;

export interface StoreState extends State {
  token: string | null;
  config: ConfigState;
  questions: TriviaQuestion[];
  setConfig: (params: ConfigParams) => void;
  getQuestions: () => void;
}
