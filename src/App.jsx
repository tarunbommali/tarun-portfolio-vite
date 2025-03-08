import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Skills from "./routes/Skills";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaRobot, FaChevronUp } from "react-icons/fa6";
import AIChatbot from "./components/Global/AIChatbot";

// Scroll to Top Function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Layout Component
const AppLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";


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
      {/* <FloatingButtons isVisible={isVisible} scrollToTop={scrollToTop} /> */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-[9999]">
            {/* AI Chatbot Button */}
            <button
              className={`p-3 rounded-full shadow-lg transition ${
                theme === "light" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-700 hover:bg-blue-800 text-gray-200"
              }`}
              onClick={() => setShowChat(true)}
            >
              <FaRobot size={24} />
            </button>
      
            {/* Scroll to Top Button */}
            {isVisible && (
              <button
                className={`p-3 rounded-full shadow-lg transition ${
                  theme === "light" ? "bg-gray-700 hover:bg-gray-800 text-white" : "bg-gray-500 hover:bg-gray-600 text-gray-100"
                }`}
                onClick={scrollToTop}
              >
                <FaChevronUp size={24} />
              </button>
            )}
      
            {/* Chatbot UI */}
            {showChat && <AIChatbot closeChat={() => setShowChat(false)} />}
          </div>
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
