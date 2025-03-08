import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Skills from "./routes/Skills";
import { useEffect, useState } from "react";
import FloatingButtons from "./components/Global/FloatingButtons";

// Scroll to Top Function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Layout Component
const AppLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
      {/* Pass Props Correctly */}
      <FloatingButtons isVisible={isVisible} scrollToTop={scrollToTop} />
    </div>
  );
};

// Define Routes
const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
    ],
  },
];

// Create Router
export const AppRouter = createBrowserRouter(routes);
