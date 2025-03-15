import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import PROFILE_IMG from '../../assets/PROFILE_IMG.png'
import TypewriterComponent from "../Animation/Typewriter";
import {
  WHATSAPP_URL,
  RESUME_DOWNLOAD_LINK,
} from "../../utils/constants";
import { getTsObject } from "../Animation/tsObject";
import { useSelector } from "react-redux";
import Globe from "../Animation/Globe";

const HeroPage1 = () => {
  const [init, setInit] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light"; // Dynamically set theme

  // Initialize the particles engine on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => getTsObject(theme), [theme]);

  // Theme-based styles
  const themeStyles = {
    light: {
      textColor: "text-black",
      btnPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
      btnSecondary: "bg-gray-700 hover:bg-gray-800 text-white",
    },
    dark: {
      textColor: "text-white",
      btnPrimary: "bg-green-500 hover:bg-green-600 text-white",
      btnSecondary: "bg-gray-500 hover:bg-gray-600 text-white",
    },
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden`}>
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 w-full h-full -z-10"
          options={options} // Dynamic particle options
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen  text-center sm:px-10">
        <div className="hero flex flex-col lg:flex-row items-center lg:justify-center bg-transparent min-h-screen">
          <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
            {/* Profile Image with Animation */}
            <motion.img
              alt="profile"
              src={PROFILE_IMG}
              className="w-[80%] md:w-[300px] md:h-[300px] rounded-full shadow-2xl mb-6 md:mr-44 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />

            <div className="flex flex-col justify-center w-full lg:w-auto">
              <div className="flex flex-col justify-start">
                <h1
                  className={`${themeStyles[theme].textColor} text-5xl`}
                >
                  Hi,
                </h1>
                <h1
                  className={`text-5xl  font-bold ${themeStyles[theme].textColor}`}
                >
                  I am, Tarun Bommali
                </h1>
              </div>

              {/* Typewriter Text Section */}
              <div className="w-auto mx-auto md:mx-4 mt-5">
                <TypewriterComponent />
              </div>

              {/* Button and Social Menu */}
              <div className="flex flex-col mt-8 space-y-4">
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={`btn rounded-md py-2 px-5 font-semibold hover:scale-110 ${themeStyles[theme].btnPrimary}`}
                    href={WHATSAPP_URL}
                  >
                    Engage me
                  </a>
                  <a
                    target="_blank"
                    className={`btn rounded-md py-2 px-5 font-semibold ${themeStyles[theme].btnSecondary}`}
                    rel="noreferrer"
                    href={RESUME_DOWNLOAD_LINK}
                  >
                    View Resume
                  </a>
                </div>
              </div>

              <Globe  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage1;
