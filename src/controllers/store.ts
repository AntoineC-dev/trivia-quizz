import create from "zustand";
import { DEFAULT_API_CATEGORY, getQuestionsRequest } from "../api";
import { shuffleArray } from "../helpers";
import { ConfigState, QuizzState, StoreAnswer, StoreQuestion, StoreState } from "../types";

const initialConfigState: ConfigState = {
  amount: 10,
  category: DEFAULT_API_CATEGORY.id,
  difficulty: "easy",
};

const initialQuizzState: QuizzState = {
  questions: [],
  questionsCount: 0,
  results: [],
  score: 0,
  status: "initial",
};

export const useStore = create<StoreState>((set, get) => ({
  token: null,
  config: initialConfigState,
  setConfig: (params) => set((state) => ({ config: { ...state.config, ...params } })),
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
    const results: StoreAnswer[] = questions.map((_) => ({ answer: "", isValid: false }));
    set((state) => ({
      quizz: { ...state.quizz, questions, questionsCount: questions.length, results, status: "completing" },
    }));
  },
  setQuizzStatus: (status) => set((state) => ({ quizz: { ...state.quizz, status } })),
  resetQuizz: () => set({ quizz: initialQuizzState }),
  updateResults: ({ index, answer }) => {
    const { quizz } = get();
    const question = quizz.questions[index];
    const isValid = question.correct_answer === answer;
    const results = quizz.results.map((result, i) => (index === i ? { answer, isValid } : result));
    const score = results.filter((result) => result.isValid).length;
    set((state) => ({ quizz: { ...state.quizz, results, score } }));
  },
}));
