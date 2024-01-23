import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

import { MainRoutes, AuthRoutes } from "./routes";
import { HomePage, LoginPage } from "./pages";
import { ErrorBoundaryLayout } from "./atoms/ErrorBoundaryLayout/ErrorBoundaryLayout";
import { AuthenticationProvider } from "./providers/Authentication";
import { ProtectedRoute } from "./routes/Auth/ProtectedRoute";
import { queryClient } from "../react-query";

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
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <RouterProvider router={router} />
        </AuthenticationProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

export default App;
