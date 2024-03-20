import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { SuccessPage } from "./pages/SuccessPage";
import { DefaultLayout } from "./Layouts/defaultLayout";

export function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={<DefaultLayout />}
      >
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/checkout'
          element={<Checkout />}
        />

        <Route
          path='/succes'
          element={<SuccessPage />}
        />
      </Route>
    </Routes>
  );
}
