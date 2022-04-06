import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { ROUTES } from "./ROUTES";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
