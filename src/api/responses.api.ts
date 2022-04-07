import { AxiosResponse } from "axios";
import { TriviaCategory, TriviaQuestion, TriviaResponseCode } from "../types";

interface CategoriesResponse {
  trivia_categories: TriviaCategory[];
}

export type AxiosCategoriesResponse = AxiosResponse<CategoriesResponse>;

interface CategoryCountResponse {
  category_id: TriviaCategory["id"];
  category_question_count: {
    total_question_count: number;
    total_easy_question_count: number;
    total_medium_question_count: number;
    total_hard_question_count: number;
  };
}
export type AxiosCategoryCountResponse = AxiosResponse<CategoryCountResponse>;

interface GetTokenResponse {
  response_code: TriviaResponseCode;
  response_message: string;
  token: string;
}

export type AxiosGetTokenResponse = AxiosResponse<GetTokenResponse>;
export type AxiosResetTokenResponse = AxiosResponse<Omit<GetTokenResponse, "response_message">>;

interface GetQuestionsResponse {
  response_code: TriviaResponseCode;
  results: TriviaQuestion[];
}

export type AxiosGetQuestionsResponse = AxiosResponse<GetQuestionsResponse>;
