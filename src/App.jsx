import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from './components/global/Footer';
import Home from "./routes/Home";

// Layout Component
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer/>
  </>
);

// Define Routes
const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

// Create Router
export const AppRouter = createBrowserRouter(routes);

