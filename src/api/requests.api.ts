import { QuestionsRequestParams, TriviaQuestion } from "../types";
import { api, endpoints } from "./config.api";
import {
  AxiosCategoriesResponse,
  AxiosCategoryCountResponse,
  AxiosGetQuestionsResponse,
  AxiosGetTokenResponse,
  AxiosResetTokenResponse,
} from "./responses.api";

// CATEGORY
export const getCategoriesRequest = () => api.get<any, AxiosCategoriesResponse>(endpoints.categories);
export const getCategoryCountRequest = (id: number) =>
  api.get<any, AxiosCategoryCountResponse>(endpoints.categoryCount(id));

// TOKEN
export const generateTokenRequest = () => api.get<any, AxiosGetTokenResponse>(endpoints.getToken);
export const resetTokenRequest = (token: string) => api.get<any, AxiosResetTokenResponse>(endpoints.resetToken(token));

// QUESTION
export const getQuestionsRequest = async (
  params: QuestionsRequestParams
): Promise<{ questions: TriviaQuestion[]; token: string }> => {
  if (!params.token) {
    const { data } = await generateTokenRequest();
    const response = await api.get<any, AxiosGetQuestionsResponse>(
      endpoints.questions({ ...params, token: data.token })
    );
    return { questions: response.data.results, token: data.token };
  }

  const { data } = await api.get<any, AxiosGetQuestionsResponse>(endpoints.questions(params));
  if (data.response_code === 3) {
    const { data } = await generateTokenRequest();
    const response = await api.get<any, AxiosGetQuestionsResponse>(
      endpoints.questions({ ...params, token: data.token })
    );
    return { questions: response.data.results, token: data.token };
  }
  if (data.response_code === 4) {
    const { data } = await resetTokenRequest(params.token);
    const response = await api.get<any, AxiosGetQuestionsResponse>(
      endpoints.questions({ ...params, token: data.token })
    );
    return { questions: response.data.results, token: data.token };
  }
  return { questions: data.results, token: params.token };
};
