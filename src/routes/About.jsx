
import Services from '../components/About/services';
import Testimonial from '../components/About/testimonial';
import MyAccordion from "../components/About/myAccordion";

const About = () => {
  return (
    <div className="bg-[#f5f6f7] w-[100%]">
      <Services />
      <Testimonial className="will-change-scroll" />
      <MyAccordion />
    </div>
  );
};
export default About;
