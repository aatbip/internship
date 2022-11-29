import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import BookingsRoute from "./pages/bookings/routes";
import HomepageRoutes from "./pages/homepage/routes";

import Homepage from "./pages/homepage/homepage";
import Contact from "./pages/homepage/contact";

import Booking from "./pages/bookings/about";
import Payment from "./pages/bookings/payment";

// /homepage, /homepage/contact
// /bookings/about, /bookings/payment

// export default function Router() {
//   return useRoutes([
//     {
//       element: <Layout />,
//       children: [
//         { path: "/*", element: <HomepageRoutes /> },
//         { path: "/bookings/*", element: <BookingsRoute /> },
//       ],
//     },
//   ]);
// }

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        { path: "/contact", element: <Contact /> },
      ],
    },

    {
      path: "/booking",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Booking />,
        },
        {
          path: "payment/:id",
          element: <Payment />,
        },
      ],
    },

    {
      path: "/404",
      element: <h1>404 NOT FOUND</h1>,
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
