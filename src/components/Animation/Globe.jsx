import { useEffect } from "react";
import TagCloud from "TagCloud";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Globe = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      '<i class="fab fa-react text-[#61dafb]"></i>',
      '<i class="fab fa-html5 text-[#e34f26]"></i>',
      '<i class="fab fa-css3-alt text-[#264de4]"></i>',
      '<i class="fab fa-github text-white"></i>',
      '<i class="fab fa-js-square text-[#f7df1e]"></i>',
      '<i class="fab fa-node-js text-[#68a063]"></i>',
      '<i class="fab fa-git-alt text-[#f05032]"></i>',
      '<i class="fab fa-vuejs text-[#42b883]"></i>',
      '<i class="fab fa-figma text-[#f24e1e]"></i>',
      '<i class="fa-brands fa-linkedin text-[#0077b5]"></i>',
      '<i class="fa-brands fa-wordpress text-[#21759b]"></i>',
      '<i class="fa-brands fa-docker text-[#2496ed]"></i>',
      '<i class="fa-solid fa-code text-white"></i>',
    ];

    const options = {
      radius: 220,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    // Clear previous instances to prevent duplication
    const existingCloud = document.querySelector('.tagcloud');
    if (existingCloud) {
      existingCloud.innerHTML = '';  // Remove existing tags
    }

    TagCloud(container, texts, options);

    // Ensure HTML is parsed correctly
    const tags = document.querySelectorAll(".tagcloud span");
    tags.forEach(tag => {
      tag.innerHTML = tag.textContent;
    });

  }, []);

  return (
    <div className="relative flex items-center justify-center w-full bg-transparent md:hidden">
      <span className="inline-block font-light tracking-wider text-2xl tagcloud"></span>
    </div>
  );
};

export default Globe;
