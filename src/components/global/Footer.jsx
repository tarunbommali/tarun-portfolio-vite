import styled from "styled-components";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";
import { CERTIFICATE_AND_CERTIFICATION } from "../../utils/document";

import { TbBrandLeetcode } from "react-icons/tb";

const SocialIconLink = styled.a`
  color: inherit;
  margin-right: 8px;

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const currentTheme = "dark";

// Define colors for light and dark themes
const iconColors = {
  light: {
    linkedin: "#0077b5",
    github: "#2b3137",
    instagram: "#bc5288",
  },
  dark: {
    linkedin: "#0077b5",
    github: "#f5f5f5",
    instagram: "#d16d8c",
  },
};

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Solved Popular Coding Question</h6>
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
      <nav>
        <h6 className="footer-title">Certifications</h6>
        {CERTIFICATE_AND_CERTIFICATION.map((cert, index) => (
          <a
            target="__blank"
            href={cert.link}
            key={index}
            className="flex link link-hover"
          >
            {cert.title}
          </a>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <SocialIconLink
            href="https://www.linkedin.com/in/tarunbommali/"
            target="_blank"
          >
            <FaLinkedin
              size={28}
              className="fill-current"
              style={{ color: iconColors[currentTheme].linkedin }}
            />
          </SocialIconLink>

          <SocialIconLink
            href="https://instagram.com/disistarun"
            target="_blank"
          >
            <FaInstagram
              size={28}
              className="fill-current"
              style={{ color: iconColors[currentTheme].instagram }}
            />
          </SocialIconLink>
        </div>
        <h6 className="footer-title">Coding Profile</h6>
        <div className="grid grid-flow-col gap-4">
        <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
          <FaGithub
            size={28}
            className="fill-current"
            style={{ color: iconColors[currentTheme].github }}
          />
        </SocialIconLink>
        <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
          <FaHackerrank
            size={28}
            className="fill-current"
            style={{ color: iconColors[currentTheme].github }}
          />
        </SocialIconLink>
        <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
          <TbBrandLeetcode
            size={28}
            className="fill-current"
            style={{ color: iconColors[currentTheme].github }}
          />
        </SocialIconLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
