import { useRoutes } from "react-router-dom";
import Homepage from "./homepage";
import Contact from "./contact";

export default function HomepageRoutes() {
  return useRoutes([
    {
      children: [
        { path: "", element: <Homepage /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
}
