import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { testimonialsList } from "../../utils/testimonialsData";
import { useSelector } from "react-redux";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalTestimonials = testimonialsList.length;
  const currentTestimonial = testimonialsList.find((testimonial) => testimonial.id === activeIndex);
  const { name, position, imgUrl, company, testimonial } = currentTestimonial || {};
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  // Define dynamic theme colors
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-200";
  const quoteTextColor = theme === "light" ? "text-gray-900" : "text-gray-300";
  const buttonColor = theme === "light" ? "text-gray-900" : "text-gray-400";
  const hoverButtonColor = theme === "light" ? "hover:text-gray-600" : "hover:text-gray-300";
  const shadowColor = theme === "light" ? "shadow-indigo-600/10" : "shadow-gray-800";
  const ringColor = theme === "light" ? "ring-indigo-50" : "ring-gray-800";

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`hidden md:block min-h-[100%] p-5 ${bgColor} ${textColor}`}>
      <section className={`relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 ${bgColor}`}>
        <div className={`absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]`} />
        <div className={`absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] ${bgColor} ${shadowColor} ring-1 ${ringColor} sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center`} />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-semibold mb-2 flex justify-center items-center text-lg md:text-3xl">Endorsement</h1>
          <figure className="mt-10">
            <blockquote className={`text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9 ${quoteTextColor}`}>
              <p className="h-[128px]">“{testimonial}”</p>
            </blockquote>
            <figcaption className="mt-10">
              <img className="mx-auto h-10 w-10 rounded-full" src={imgUrl} alt={name} />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className={`font-semibold ${textColor}`}>{name}</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className={`fill-current ${textColor}`}>
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className={`text-sm ${quoteTextColor}`}>{company} ~ {position}</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            className={`flex items-center font-semibold transition-colors duration-300 ${buttonColor} ${hoverButtonColor}`}
            onClick={handlePrevClick}
          >
            <GrPrevious className="mr-2" /> Previous
          </button>
          <button
            className={`flex items-center font-semibold transition-colors duration-300 ${buttonColor} ${hoverButtonColor}`}
            onClick={handleNextClick}
          >
            Next <GrNext className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
