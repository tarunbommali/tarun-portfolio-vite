import Services from "../components/About/services";
import Testimonial from "../components/About/testimonial";
import MyAccordion from "../components/About/myAccordion";
import { useSelector } from "react-redux";

const About = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={`w-full min-h-screen transition-all ${
        theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <div className="container mx-auto py-10 px-5">
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
        <div
          className={`mt-10 p-5 rounded-md shadow-lg transition-all `}
        >
          <MyAccordion />
        </div>
      </div>
    </div>
  );
};

export default About;
