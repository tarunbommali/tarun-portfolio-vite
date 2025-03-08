/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaTimes, FaTrash, FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";

const AIChatbot = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Tarun's AI assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const options = [
    "About Tarun",
    "Tarun's Projects",
    "Tarun's Skills",
    "Tarun's Contact Info",
    "Tarun's Portfolio Link",
    "Hobbies",
  ];

  useEffect(() => {
    if (input) {
      const filteredSuggestions = options.filter((option) =>
        option.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSuggestions([]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (input) => {
    const responses = {
      "About Tarun":
        "Tarun is a passionate frontend developer skilled in React, JavaScript, and UI/UX design. He loves building user-friendly web applications.",
      "Tarun's Projects":
        "Tarun has worked on multiple projects, including 'Campus Edge' (a student networking platform) and a blood donation alert system.",
      "Hobbies": "Playing Chess, Watching Movies",
      "Tarun's Skills":
        "Tarun is proficient in React, Redux Toolkit, JavaScript, Tailwind CSS, and GitHub. He continuously learns new technologies.",
      "Tarun's Contact Info":
        "You can contact Tarun via email at tarun@example.com or connect on LinkedIn: linkedin.com/in/tarun.",
      "Tarun's Portfolio Link":
        "Check out Tarun's portfolio here: [tarunbommali.netlify.app](https://tarunbommali.netlify.app/)",
      "Other": "I'm not sure about that. Try asking something related to Tarun's portfolio.",
    };

    return { text: responses[input] || responses["Other"], sender: "bot" };
  };

  const clearChat = () => {
    setMessages([
      { text: "Hello! I'm Tarun's AI assistant. How can I help you today?", sender: "bot" },
    ]);
  };

  return (
    <div
      className={`fixed bottom-20 right-6 w-80 shadow-lg rounded-lg transition ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-gray-200"
      }`}
    >
      {/* Header */}
      <div
        className={`p-4 border-b flex justify-between items-center rounded-t-lg ${
          theme === "light" ? "bg-blue-500 text-white" : "bg-blue-700 text-gray-200"
        }`}
      >
        <h3 className="font-bold">AI Chatbot</h3>
        <div className="flex gap-2">
          <button
            onClick={clearChat}
            className={`btn btn-sm btn-circle ${
              theme === "light" ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            }`}
          >
            <FaTrash />
          </button>
          <button
            onClick={closeChat}
            className={`btn btn-sm btn-circle ${
              theme === "light" ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            }`}
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat ${msg.sender === "user" ? "chat-end" : "chat-start"}`}
          >
            <div
              className={`chat-bubble ${
                msg.sender === "user"
                  ? theme === "light"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-700 text-gray-200"
                  : theme === "light"
                  ? "bg-gray-200 text-gray-900"
                  : "bg-gray-600 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && <div className="text-gray-500 text-sm mt-2">AI is typing...</div>}
      </div>

      {/* Suggestion Dropdown */}
      {suggestions.length > 0 && (
        <div
          className={`absolute bottom-16 w-full shadow-md rounded-md ${
            theme === "light" ? "bg-white text-gray-900" : "bg-gray-700 text-gray-200"
          }`}
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 transition ${
                theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-600"
              }`}
              onClick={() => handleSendMessage(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Input & Send Button */}
      <div className="p-3 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Tarun..."
          className={`input input-bordered w-full ${
            theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-700 text-gray-200"
          }`}
        />
        <button
          onClick={() => handleSendMessage(input)}
          className={`btn ${
            theme === "light" ? "btn-primary" : "bg-blue-700 hover:bg-blue-800 text-gray-200"
          }`}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
