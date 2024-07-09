import { RouteObject, useRoutes } from 'react-router-dom';
import CardList from '../pages/CardList';
import NotFound from '../pages/NotFound';
import Card from './Card';

export const MAIN_ROUTE = '/';
export const CARD_ROUTE = 'card';
export const CARD_DETAILED_ROUTE = 'card-detailed';
export const NOTFOUND_ROUTE = `*`;

const MainRouter = () => {
  const paths: RouteObject[] = [
    {
      path: NOTFOUND_ROUTE,
      element: <NotFound />,
    },
    {
      path: MAIN_ROUTE,
      element: <CardList />,
    },
    {
      path: `${CARD_ROUTE}/*`,
      element: <Card />,
    },
  ];

  return useRoutes(paths);
};

export default MainRouter;
