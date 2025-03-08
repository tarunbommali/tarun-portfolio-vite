import { skillsList } from "../utils/skillsData";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

const SKILL_ROUTE_BG_URL = "";

const Skills = () => {
  const [activeTopic, setActiveTopic] = useState("React");
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={`flex justify-center bg-cover transition-all ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
      style={{
        backgroundImage: `url(${SKILL_ROUTE_BG_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[80%]">
        {/* Skills List */}
        <ul
          className={`flex flex-wrap m-5 p-5 rounded-md transition-all ${
            theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
          }`}
        >
          {skillsList.map(({ id, technology, icon, rating }) => (
            <button
              key={id}
              onClick={() => setActiveTopic(technology)}
              className={`transition-all ${
                theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
            >
              <li
                className={`flex flex-col m-5 px-5 py-2 rounded-md transition-all ${
                  theme === "light" ? "bg-gray-100" : "bg-gray-700"
                }`}
              >
                <div className="flex">
                  {icon}
                  <div className="flex justify-start items-start flex-col pl-3">
                    <p className="skill-title">{technology}</p>
                    <p className="flex">
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <FaStar
                            key={index}
                            className={
                              index < rating
                                ? theme === "light"
                                  ? "text-gray-500"
                                  : "text-yellow-400"
                                : "text-gray-800"
                            }
                          />
                        ))}
                    </p>
                  </div>
                </div>
              </li>
            </button>
          ))}
        </ul>

        {/* Skill Item Concepts */}
        <div
          className={`flex-wrap m-5 p-5 rounded-md hidden md:flex transition-all ${
            theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
          }`}
        >
          {skillsList
            .filter(({ technology }) => technology === activeTopic)
            .map(({ id, technology, keyTopics }) => (
              <div key={id}>
                <h3 className="flex font-bold m-2 text-2xl">{technology}</h3>
                <ul className="flex flex-wrap">
                  {Object.keys(keyTopics).map((topic, index) => (
                    <li className="flex mx-3 w-[220px] py-2" key={index}>
                      <h1 className="md:text-lg">{topic}</h1>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
