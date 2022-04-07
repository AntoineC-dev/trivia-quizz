import axios from "axios";
import { QuestionsRequestParams } from "../types";

export const api = axios.create({
  baseURL: "https://opentdb.com/",
});

export const endpoints = {
  questions: (params: QuestionsRequestParams) =>
    `api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&token=${params.token}`,
  getToken: "api_token.php?command=request",
  resetToken: (token: string) => `api_token.php?command=reset&token=${token}`,
  categories: "api_category.php",
  categoryCount: (id: number) => `api_count.php?category=${id}`,
};
