import { useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const textColor = theme === "light" ? "text-gray-900" : "text-gray-200";
  const cursorColor = theme === "light" ? "text-blue-500" : "text-blue-400";

  return (
    <div className="flex">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Frontend Developer",
            "Open Source Contributor",
            "React Developer",
            "Debuggable",
          ],
          autoStart: true,
          loop: true,
          wrapperClassName: `text-[28px] md:text-[32px] font-bold ${textColor}`, // Dynamic text color
          cursorClassName: `text-[28px] md:text-[28px] ${cursorColor}`, // Dynamic cursor color
          delay: 100,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
