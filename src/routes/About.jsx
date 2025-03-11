import Services from "../components/About/services";
import Testimonial from "../components/About/testimonial";
import MyAccordion from "../components/About/myAccordion";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const About = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={`flex flex-col py-5 mt-[-10px] ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="container mx-auto p-5">
        {/* Page Title */}
        <motion.p
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth fade-in effect
  className={`text-xl md:text-3xl text-center font-bold mb-8 capitalize transition-colors ${
    theme === "light" ? "text-blue-600" : "text-blue-400"
  }`}
>
          About
        </motion.p>
        {/* Services Section */}
        <div
          className={`p-5 rounded-md shadow-lg transition-all ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <Services />
        </div>

        {/* Testimonial Section */}
        <div
          className={`mt-10 p-5 rounded-md shadow-lg transition-all will-change-scroll ${
            theme === "light" ? "bg-gray-50" : "bg-gray-700"
          }`}
        >
          <Testimonial />
        </div>

        {/* Accordion Section */}
        <div className={`mt-10 p-5 rounded-md shadow-lg transition-all `}>
          <MyAccordion />
        </div>
      </div>
    </div>
  );
};

export default About;
