import create from "zustand";
import { DEFAULT_API_CATEGORY, getQuestionsRequest } from "../api";
import { shuffleArray } from "../helpers";
import { ConfigParams, ConfigState, StoreQuestion, StoreState } from "../types";

const initialConfigState = {
  amount: 10,
  category: DEFAULT_API_CATEGORY.id,
  difficulty: "easy",
} as ConfigState;

const initialQuizzState = {
  questions: [],
  questionsCount: 0,
  results: [],
  score: 0,
};

export const useStore = create<StoreState>((set, get) => ({
  token: null,
  config: initialConfigState,
  setConfig: (params: ConfigParams) =>
    set((state) => ({
      config: {
        ...state.config,
        ...params,
      },
    })),
  quizz: initialQuizzState,
  initializeQuizz: async () => {
    const { config, token } = get();
    const response = await getQuestionsRequest({ ...config, token });
    const questions: StoreQuestion[] = response.questions.map((val) => {
      if (val.type === "multiple") {
        const answers = shuffleArray([val.correct_answer, ...val.incorrect_answers]);
        return { question: val.question, answers, correct_answer: val.correct_answer };
      }
      return { question: val.question, correct_answer: val.correct_answer };
    });
    set((state) => ({ quizz: { ...state.quizz, questions, questionsCount: questions.length } }));
  },
  resetQuizz: () => set({ quizz: { questions: [], questionsCount: 0, results: [], score: 0 } }),
  updateResults: (index: number, answer: string) => {
    const { quizz } = get();
    const question = quizz.questions[index];
    const isValid = question.correct_answer === answer;
    const results = quizz.results.map((result, i) => (index === i ? { answer, isValid } : result));
    const score = results.filter((result) => result.isValid).length;
    set((state) => ({ quizz: { ...state.quizz, results, score } }));
  },
}));
