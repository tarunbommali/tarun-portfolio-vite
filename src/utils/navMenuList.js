// Export all icons
import { GoHomeFill } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { FiAward } from "react-icons/fi";

export const navMenuList = [
  { displayText: "Home", pathname: "/", icon: GoHomeFill },
  { displayText: "Skills", pathname: "/skills", icon: FiAward },
  { displayText: "Projects", pathname: "/projects", icon: GoProjectRoadmap },
  { displayText: "About", pathname: "/about", icon: IoIosDocument },
];
