import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { HeroesApp } from '../HeroesApp';
import { DcPage, MarvelPage } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
    {
      path: '/',
      element: <HeroesApp />,
      children: [
        {
          path: '/',
          element: <MarvelPage />,
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
          path: '*',
          element: <Navigate to="marvel" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
