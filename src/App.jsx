import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from './components/global/Footer';
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Skills from "./routes/Skills";
import { FaRobot } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";

// Scroll to Top Function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Layout Component
const AppLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">

        {/* AI Chatbot Button */}
        <button
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          onClick={() => document.getElementById('chat_modal').showModal()}
        >
          <FaRobot size={24} />
        </button>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
            onClick={scrollToTop}
          >
            <FaChevronUp size={24} />
          </button>
        )}
      </div>

      {/* AI Chatbot Modal */}
      <dialog id="chat_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">AI Chatbot</h3>
          <p className="py-4">How can I assist you today?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
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
