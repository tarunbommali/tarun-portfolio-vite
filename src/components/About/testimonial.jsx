import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { testimonialsList } from "../../utils/testimonialsData";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalTestimonials = testimonialsList.length;
  const currentTestimonial = testimonialsList.find((testimonial) => testimonial.id === activeIndex);
  const { name, position, imgUrl, company, testimonial } = currentTestimonial || {};

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => {
      // If activeIndex is the first testimonial, loop back to the last testimonial
      return prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      // If activeIndex is the last testimonial, loop back to the first testimonial
      return prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1;
    });
  };

  const isFirstIndex = activeIndex === 0;
  const isLastIndex = activeIndex === totalTestimonials - 1;

  return (
    <div  className="hidden md:block min-h-[100%] bg-red p-5">
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="text-[#191919] font-semibold mb-2 flex justify-center items-center text-lg md:text-3xl">Endorsement</h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p className="h-[128px]">“{testimonial}”</p>
          </blockquote>
          <figcaption className="mt-10">
            <img className="mx-auto h-10 w-10 rounded-full" src={imgUrl} alt={name} />
            
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{name}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{company} ~ {position}</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="flex justify-between items-center m-400px">
        <button className={`flex items-center font-semibold ${isFirstIndex ? 'text-gray-400' : ''}`} onClick={handlePrevClick}><GrPrevious className="mr-2" /> Previous</button>
        <button className={`flex items-center font-semibold ${isLastIndex ? 'text-gray-400' : ''}`} onClick={handleNextClick}>Next <GrNext className="ml-2" /></button>
      </div>
    </section>
    </div>
  );
}

export default Testimonial;
