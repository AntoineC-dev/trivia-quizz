import create from "zustand";
import { DEFAULT_API_CATEGORY, getQuestionsRequest } from "../api";
import { ConfigParams, StoreState } from "../types";

export const useStore = create<StoreState>((set, get) => ({
  token: null,
  config: {
    amount: 10,
    category: DEFAULT_API_CATEGORY.id,
    difficulty: "easy",
  },
  questions: [],
  setConfig: (params: ConfigParams) =>
    set((state) => ({
      config: {
        ...state.config,
        ...params,
      },
    })),
  getQuestions: async () => {
    const { config, token } = get();
    const response = await getQuestionsRequest({ ...config, token });
    set({ ...response });
  },
}));
