import { useState } from "react";
import accordionData from "../../utils/accordionData";
import { useSelector } from "react-redux";

export default function MyAccordion() {
  const [selected, setSelected] = useState(null);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  // Define dynamic colors
   const textColor = theme === "light" ? "text-gray-900" : "text-gray-200";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-600";

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id); // Toggle the selected item
  };

  return (
    <div className={`flex md:min-h-[100vh] flex-col mt-[18px] items-center py-3 ${textColor}`}>
      <h1 className="font-semibold mb-3 text-lg md:text-3xl">Common Inquiries</h1>

      {accordionData && accordionData.length > 0 ? (
        accordionData.map((dataItem) => (
          <div
            className={`flex flex-col justify-start  rounded-md shadow-md text-lg md:xl w-[98%] md:w-[60%] m-2 p-2 px-5`}
            key={dataItem.id}
          >
            <div
              className={`flex justify-between pb-2 cursor-pointer ${textColor}`}
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <h2 className="font-semibold">{dataItem.question}</h2>
              <span className="font-semibold h-[20px]">
                {selected === dataItem.id ? "-" : "+"}
              </span>
            </div>
            {selected === dataItem.id && (
              <div className={`flex mt-1 text-start pt-3 border-t ${borderColor} w-full`}>
                <h3 className={`${textColor}`}>{dataItem.answer}</h3>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}
