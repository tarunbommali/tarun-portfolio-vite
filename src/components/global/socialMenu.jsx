 import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Icons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 18px;
  margin-top: 18px;
`;

const SocialIconLink = styled.a`
  color: inherit;
  margin-right: 18px;

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const SocialMenu = () => {

  const currentTheme = 'dark';  

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
    }
  };

  // Select icon colors based on the current theme
  const themeColors = currentTheme === 'light' ? iconColors.light : iconColors.dark;

  return (
    <Icons>
      <SocialIconLink href="https://www.linkedin.com/in/tarunbommali/" target="_blank">
        <FaLinkedin size={38} className="fill-current" style={{ color: themeColors.linkedin }} />
      </SocialIconLink>

      <SocialIconLink href="https://github.com/tarunbommali" target="_blank">
        <FaGithub size={38} className="fill-current" style={{ color: themeColors.github }} />
      </SocialIconLink>

      <SocialIconLink href="https://instagram.com/disistarun" target="_blank">
        <FaInstagram size={38} className="fill-current" style={{ color: themeColors.instagram }} />
      </SocialIconLink>
    </Icons>
  );
};

export default SocialMenu;
