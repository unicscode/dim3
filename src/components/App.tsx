import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { MainRoutes, AuthRoutes } from "./routes";
import { HomePage, LoginPage } from "./pages";
import { ErrorBoundaryLayout } from "./atoms/ErrorBoundaryLayout/ErrorBoundaryLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ErrorBoundaryLayout />}>
      <Route element={<MainRoutes />}>
        <Route path="/" element={<HomePage />} />

        <Route element={<AuthRoutes />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <SnackbarProvider />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
