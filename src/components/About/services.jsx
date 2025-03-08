import { servicesData } from "../../utils/servicesData";

function Services() {
  return (
    <div className="flex flex-col  items-center justify-center py-6  w-[100%]">
      <h1  className="p-3 font-semibold text-lg md:text-3xl">What I Can Do?</h1>
      <ul className='flex flex-wrap justify-around items-center px-2 my-1 w-[100%]'>
        {servicesData.map((service, index) => (
          <li key={index} className="item w-[80%] md:w-[30%] m-2 shadow-lg flex flex-col items-center p-4 hover:scale-105">
            <img
              src={service.imgUrl}
              alt="icon"
              className="w-[90px] h-[90px]"
            />
            <div className="font-semibold text-[#191919] pt-2">{service.displayText}</div>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default Services;
