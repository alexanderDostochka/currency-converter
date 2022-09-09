import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import Converter from "./pages/Converter";

const Router = () => (
  <Routes>
    <Route path={routes.home} element={<Converter />} />
  </Routes>
);

export default Router;
