import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import { LoginPage } from "../features/auth";
import { DashboardPage } from "../features/dashboard";
import { PrivateRoute } from "./private-route";
import RegisterPage from "../features/register/pages/RegisterPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
};
