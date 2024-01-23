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
import { AuthenticationProvider } from "./providers/Authentication";
import { ProtectedRoute } from "./routes/Auth/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ErrorBoundaryLayout />}>
      <Route element={<MainRoutes />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<AuthRoutes />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <AuthenticationProvider>
      <SnackbarProvider />
      <RouterProvider router={router} />
    </AuthenticationProvider>
  );
}

export default App;
