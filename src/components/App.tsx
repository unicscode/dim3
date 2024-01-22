import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import { MainRoutes, AuthRoutes } from './routes';
import { HomePage, LoginPage } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainRoutes />}>
      <Route path='/' element={<HomePage />} />
      <Route element={<AuthRoutes />}>
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
