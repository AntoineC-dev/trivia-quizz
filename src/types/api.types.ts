import { ConfigState } from "./store.types";

export interface QuestionsRequestParams extends ConfigState {
  token: string | null;
}
