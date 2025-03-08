import { useSelector } from "react-redux";
import HeroPage1 from "../components/Home/Heropage1";

const Home = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={`relative overflow-x-hidden flex flex-col min-h-screen transition-all ${
        theme === "light" ? "text-gray-900" : "text-white"
      }`}
    >
      {/* Hero Section */}
      <div className="w-full flex justify-center items-center py-10 transition-all ">
        <HeroPage1 />
      </div>
    </div>
  );
};

export default Home;
