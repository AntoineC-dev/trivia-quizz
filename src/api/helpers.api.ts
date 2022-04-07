import { TriviaCategory } from "../types";
import { API_CATEGORIES, DEFAULT_API_CATEGORY } from "./data.api";

export const getCategoryById = (id: TriviaCategory["id"]) =>
  API_CATEGORIES.find((cat) => cat.id === id) ?? DEFAULT_API_CATEGORY;
export const getCategoryByName = (name: string) =>
  API_CATEGORIES.find((cat) => cat.name === name) ?? DEFAULT_API_CATEGORY;
