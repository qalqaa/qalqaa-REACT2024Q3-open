import { RouteObject, useRoutes } from "react-router-dom";
import CardList from "../pages/CardList";
import NotFound from "../pages/NotFound";

import { MAIN_ROUTE, NOTFOUND_ROUTE } from "./routes-config";

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
  ];

  return useRoutes(paths);
};

export default MainRouter;
