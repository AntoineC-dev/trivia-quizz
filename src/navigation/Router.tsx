import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Home, Question, Quizz, Results } from "../pages";
import { ROUTES } from "./ROUTES";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.quizz} element={<Quizz />}>
            <Route path=":questionIndex" element={<Question />} />
          </Route>
          <Route path={ROUTES.results} element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
