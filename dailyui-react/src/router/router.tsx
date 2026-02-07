import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Introduction from "../pages/introduction";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Introduction />,
        },
        {
          path: "/tabs",
          element: <p>tabs</p>,
        },
      ],
    },
  ],
  {
    basename: "/dailyui-react",
  },
);
