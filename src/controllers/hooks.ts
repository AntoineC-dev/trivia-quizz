import { StoreState } from "../types";
import { useStore } from "./store";

// Token
const tokenSelector = (state: StoreState) => state.token;
export const useToken = () => useStore(tokenSelector);

// Config
const configSelector = (state: StoreState) => state.config;
export const useConfig = () => useStore(configSelector);

const amountSelector = (state: StoreState) => state.config.amount;
export const useAmount = () => useStore(amountSelector);

const categorySelector = (state: StoreState) => state.config.category;
export const useCategory = () => useStore(categorySelector);

const difficultySelector = (state: StoreState) => state.config.difficulty;
export const useDifficulty = () => useStore(difficultySelector);

const setConfigSelector = (state: StoreState) => state.setConfig;
export const useSetConfig = () => useStore(setConfigSelector);

// Quizz
const quizzSelector = (state: StoreState) => state.quizz;
export const useQuizz = () => useStore(quizzSelector);

const questionsSelector = (state: StoreState) => state.quizz.questions;
export const useQuestions = () => useStore(questionsSelector);

const questionsCountSelector = (state: StoreState) => state.quizz.questionsCount;
export const useQuestionsCount = () => useStore(questionsCountSelector);

const resultsSelector = (state: StoreState) => state.quizz.results;
export const useResults = () => useStore(resultsSelector);

const scoreSelector = (state: StoreState) => state.quizz.score;
export const useScore = () => useStore(scoreSelector);

const initializeQuizzSelector = (state: StoreState) => state.initializeQuizz;
export const useInitializeQuizz = () => useStore(initializeQuizzSelector);

const resetQuizzSelector = (state: StoreState) => state.resetQuizz;
export const useResetQuizz = () => useStore(resetQuizzSelector);

const updateResultsSelector = (state: StoreState) => state.updateResults;
export const useUpdateResults = () => useStore(updateResultsSelector);
