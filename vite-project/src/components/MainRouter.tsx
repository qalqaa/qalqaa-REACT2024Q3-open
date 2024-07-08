import { RouteObject, useRoutes } from "react-router-dom";
import CardList from "../pages/CardList";
import NotFound from "../pages/NotFound";

import { MAIN_ROUTE, NOTFOUND_ROUTE, CARD_ROUTE } from "./routes-config";
import Card from "./Card";

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
