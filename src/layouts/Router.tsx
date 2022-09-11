import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import Converter from "../pages/Converter";
import ExchangeRates from "../pages/ExchangeRates";

const Router = () => (
  <Routes>
    <Route path={routes.home} element={<Converter />} />
    <Route path={routes.exchangeRates} element={<ExchangeRates />} />
  </Routes>
);

export default Router;
