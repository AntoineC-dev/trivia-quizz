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

// Questions
const questionsSelector = (state: StoreState) => state.questions;
export const useQuestions = () => useStore(questionsSelector);

const getQuestionsSelector = (state: StoreState) => state.getQuestions;
export const useGetQuestions = () => useStore(getQuestionsSelector);
