import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Home } from "../pages";
import { ROUTES } from "./ROUTES";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
