import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  const { imageURL, title, description, projectLink, repositoryLink } = project;
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light"; // Dynamically set theme

  return (
    <div
      className={`card w-full shadow-xl p-4 rounded-lg transition-all duration-300 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      {/* Project Image */}
      <figure>
        <img
          src={imageURL}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </figure>

      <div className="card-body">
        {/* Project Title */}
        <h3 className="card-title text-lg font-semibold">{title}</h3>

        {/* Project Description */}
        <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
          {description}
        </p>

        {/* Action Buttons */}
        <div className="card-actions justify-end mt-4">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn rounded-md py-2 px-4 font-semibold transition-transform hover:scale-105 ${
              theme === "light"
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
          >
            View Project
          </a>

          <a
            href={repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn rounded-md py-2 px-4 border transition-transform hover:scale-105 ${
              theme === "light"
                ? "border-gray-500 text-white hover:bg-gray-200"
                : "border-gray-400 text-white hover:bg-gray-700"
            }`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
