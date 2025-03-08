import { projectsList } from "../utils/projectsData";
import ProjectCard from "../components/Projects/ProjectCard";
import { useSelector } from "react-redux";

const Projects = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light"; // Dynamically set theme

  return (
    <div
      className={`min-h-screen py-10 px-5 transition-all duration-300 ${
        theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Page Title */}
      <h2
        className={`text-3xl font-bold mb-8 transition-colors ${
          theme === "light" ? "text-blue-600" : "text-blue-400"
        }`}
      >
        Projects
      </h2>

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
