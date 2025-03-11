/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const cardVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const ProjectCard = ({ project }) => {
  const { imageURL, title, description, projectLink, repositoryLink } = project;
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView && window.innerWidth < 768) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      className={`relative max-w-sm overflow-hidden rounded-lg shadow-xl transition-transform duration-500 hover:scale-100 group 
      ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"}`}
      variants={window.innerWidth < 768 ? cardVariant : {}}
      initial="hidden"
      animate={control}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Description (Visible on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-center text-sm max-w-xs pb-1 relative">
            {description}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-500 group-hover:w-full"></span>
          </p>
        </div>
      </div>
      {/* Title Section (Always Visible) */}
      <div className="flex justify-between items-center px-2 py-3 bg-black text-white">
        <h3 className="md:text-lg font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm font-semibold bg-green-500 rounded-md transition hover:bg-white hover:text-black"
          >
            <FaRegEye />
          </a>
          <a
            href={repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm font-semibold border border-white rounded-md transition hover:bg-gray-700"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
