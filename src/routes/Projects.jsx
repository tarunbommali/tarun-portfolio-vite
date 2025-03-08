import  { useEffect, useRef } from "react";
import "../components/Animation/scrollDrivenAnimation.css";

const Projects = () => {
  const columnsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-columns");
          } else {
            entry.target.classList.remove("animate-columns");
          }
        });
      },
      { threshold: 0.1 }
    );

    columnsRef.current.forEach((col) => {
      if (col) observer.observe(col);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center md:px-48 my-10">
      <div className="columns grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
      </div>
    </div>
  );
};

export default Projects;
