/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRobot, FaChevronUp } from "react-icons/fa6";
import AIChatbot from "./AIChatbot";
import { useSelector } from "react-redux";

const FloatingButtons = ({ isVisible, scrollToTop }) => {
  const [showChat, setShowChat] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  return (
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
  );
};

export default FloatingButtons;
