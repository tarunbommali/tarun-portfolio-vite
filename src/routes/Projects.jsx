import { projectsList } from "../utils/projectsData";
import ProjectCard from "../components/Projects/ProjectCard";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Projects = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light"; // Dynamically set theme

  return (
    <div
      className={`min-h-screen  py-5 mt-[-10px]  px-2 md:px-5 transition-all duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      {/* Page Title */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth fade-in effect
        className={`text-xl md:text-3xl text-center font-bold mb-8 capitalize transition-colors ${
          theme === "light" ? "text-blue-600" : "text-blue-400"
        }`}
      >
        Projects
      </motion.p>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {projectsList.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
