import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";
import Success from "./pages/Success";

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/booking",
    element: <Booking />
  },
  {
    path: "/success",
    element: <Success />
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}