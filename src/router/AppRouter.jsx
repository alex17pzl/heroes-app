import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { HeroesApp } from '../HeroesApp';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <HeroesApp />,
      children: [
        {
          path: '/',
          element: <Navigate to="marvel" />,
        },
        {
          path: 'marvel',
          element: <MarvelPage />,
        },
        {
          path: 'dc',
          element: <DcPage />,
        },
        {
          path: 'search',
          element: <SearchPage />,
        },
        {
          path: 'hero/:id',
          element: <HeroPage />,
        },
        {
          path: '*',
          element: <Navigate to="marvel" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
