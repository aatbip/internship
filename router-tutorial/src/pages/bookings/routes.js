import { useRoutes } from "react-router-dom";
import About from "./about";
import Payment from "./payment";

export default function BookingsRoute() {
  return useRoutes([
    {
      children: [
        { path: "", element: <About /> },
        { path: "payment", element: <Payment /> },
      ],
    },
  ]);
}
