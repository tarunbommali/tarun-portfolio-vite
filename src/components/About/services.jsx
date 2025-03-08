import { useSelector } from "react-redux";
import { servicesData } from "../../utils/servicesData";

function Services() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  // Define dynamic theme colors
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-200";
  const cardBgColor = theme === "light" ? "bg-gray-100" : "bg-gray-700";
  const shadowColor = theme === "light" ? "shadow-lg" : "shadow-gray-900";
  const hoverEffect = theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-600";

  return (
    <div className={`flex flex-col items-center justify-center py-6 w-full ${bgColor} ${textColor}`}>
      <h1 className="p-3 font-semibold text-lg md:text-3xl">What I Can Do?</h1>
      <ul className="flex flex-wrap justify-around items-center px-2 my-1 w-full">
        {servicesData.map((service, index) => (
          <li
            key={index}
            className={`item w-[80%] md:w-[30%] m-2 p-4 flex flex-col items-center 
            rounded-lg transition-transform duration-300 ${cardBgColor} ${shadowColor} ${hoverEffect} hover:scale-105`}
          >
            <img
              src={service.imgUrl}
              alt="icon"
              className="w-[90px] h-[90px]"
            />
            <div className={`font-semibold pt-2 ${textColor}`}>
              {service.displayText}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
