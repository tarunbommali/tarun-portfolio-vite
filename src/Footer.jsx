import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { useSelector } from "react-redux";
import { CERTIFICATE_AND_CERTIFICATION } from "./utils/document";

// Styled component for icons
const SocialIconLink = styled.a`
  color: inherit;
  margin-right: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

// Define theme-based icon colors
const iconColors = {
  light: {
    linkedin: "#0077b5",
    github: "#2b3137",
    instagram: "#bc5288",
    hackerrank: "#2EC866",
    leetcode: "#FFA116",
    text: "text-gray-900",
    bg: "bg-gray-200",
  },
  dark: {
    linkedin: "#0077b5",
    github: "#f5f5f5",
    instagram: "#d16d8c",
    hackerrank: "#2EC866",
    leetcode: "#FFA116",
    text: "text-white",
    bg: "bg-[#1d232a]",
  },
};

const Footer = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light"; // Dynamically set theme

  return (
    <footer className={`footer ${iconColors[theme].bg} ${iconColors[theme].text} p-6 md:p-10`}>
      {/* Popular Coding Questions */}
      <nav>
        <h6 className="footer-title">Solved Popular Coding Questions</h6>
        <a target="__blank" className="link link-hover">
          Longest common subsequence
        </a>
        <a target="__blank" className="link link-hover">
          Reverse linked list
        </a>
        <a target="__blank" className="link link-hover">
          Kth smallest element
        </a>
        <a target="__blank" className="link link-hover">
          Reverse words in a string
        </a>
      </nav>

      {/* Certifications */}
      <nav>
        <h6 className="footer-title">Certifications</h6>
        {CERTIFICATE_AND_CERTIFICATION.map((cert, index) => (
          <a key={index} target="__blank" href={cert.link} className="flex link link-hover">
            {cert.title}
          </a>
        ))}
      </nav>

      {/* Social Links */}
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <SocialIconLink href="https://www.linkedin.com/in/tarunbommali/" target="_blank">
            <FaLinkedin size={28} style={{ color: iconColors[theme].linkedin }} />
          </SocialIconLink>

          <SocialIconLink href="https://instagram.com/disistarun" target="_blank">
            <FaInstagram size={28} style={{ color: iconColors[theme].instagram }} />
          </SocialIconLink>
        </div>

        {/* Coding Profiles */}
        <h6 className="footer-title mt-4">Coding Profiles</h6>
        <div className="grid grid-flow-col gap-4 ">
          <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
            <FaGithub size={28} style={{ color: iconColors[theme].github }} />
          </SocialIconLink>

          <SocialIconLink href="https://www.hackerrank.com/tarunbommali" target="_blank">
            <FaHackerrank size={28} style={{ color: iconColors[theme].hackerrank }} />
          </SocialIconLink>

          <SocialIconLink href="https://leetcode.com/tarunbommali" target="_blank">
            <TbBrandLeetcode size={28} style={{ color: iconColors[theme].leetcode }} />
          </SocialIconLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
