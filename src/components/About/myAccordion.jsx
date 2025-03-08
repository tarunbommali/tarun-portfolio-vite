import  { useState } from "react";
import accordionData from "../../utils/accordionData";

export default function MyAccordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id); // Toggle the selected item
  };

  
  return (
    <div className="flex min-h-[100vh] flex-col mt-[18px] items-center py-3 ">
        <h1 className="font-semibold mb-3 text-lg md:text-3xl">Common inquiries</h1>
    
      {accordionData && accordionData.length > 0 ? (
        accordionData.map((dataItem) => (
          <div className="flex flex-col justify-start-start  bg-white  rounded-md shadow-md text-lg md:xl  lg:justify-center w-[98%] md:w-[60%] m-2 p-2 px-5" key={dataItem.id}>
            <div
              className="flex justify-between pb-2"
              onClick={() => handleSingleSelection(dataItem.id)} // Use arrow function to pass the id
            >
              <h2 className="font-semibold">{dataItem.question}</h2>
              <span className="font-semibold h-[20px] ">
                {selected === dataItem.id ? "-" : "+"} {/* Update the symbol based on selection */}
              </span>
            </div>
            {selected === dataItem.id && ( // Render answer if selected
              <div className="flex mt-1 text-start pt-3  border-[#606770]  border-t-[1px] border-w-[100%]">
                <h3 className="text-[#606770]">{dataItem.answer}</h3>
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
