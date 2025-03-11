import { useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import accordionData from "../../utils/accordionData";

export default function MyAccordion() {
  const [selected, setSelected] = useState(null);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  // Define dynamic colors
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-200";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-600";
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const shadowColor = theme === "light" ? "shadow-lg" : "shadow-gray-700";

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id); // Toggle the selected item
  };

  return (
    <div className={`flex md:min-h-[100vh] flex-col mt-[18px] items-center py-3 ${textColor}`}>
      <h1 className="font-semibold mb-5 text-lg md:text-3xl border-b-2 pb-2 border-blue-500">Common Inquiries</h1>

      {accordionData && accordionData.length > 0 ? (
        accordionData.map((dataItem) => (
          <div
            className={`flex flex-col justify-start rounded-md ${bgColor} ${shadowColor} text:sm md:text-lg w-[100%] md:w-[60%] m-2 p-4 transition-all duration-300 hover:shadow-xl`}
            key={dataItem.id}
          >
            <div
              className={`flex justify-between items-center pb-2 cursor-pointer ${textColor} font-semibold text-xl`}
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <h2>{dataItem.question}</h2>
              <span className="text-blue-500 text-lg">
                {selected === dataItem.id ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {selected === dataItem.id && (
              <div className={`flex mt-1 text-start pt-3 border-t ${borderColor} w-full text-base leading-relaxed`}> 
                <h3 className={`${textColor}`}>{dataItem.answer}</h3>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-red-500 font-semibold">No Data Found</div>
      )}
    </div>
  );
}