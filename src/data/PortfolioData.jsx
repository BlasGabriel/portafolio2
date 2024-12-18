//import { Stack } from "react-bootstrap";
import ReactSvg from "../assets/react.svg";
import NodeSvg from "../assets/node.svg";
import MySqlSvg from "../assets/mysql.svg";
import GitSvg from "../assets/git.svg";
import JavaScriptSvg from "../assets/javascript.svg";
//import TypeScriptSvg from "../assets/typescript.svg";
//import BadgeComponent from "../components/BadgeComponent";

export const AboutData = {
  name: "Blas Gabriel Santacruz Ramirez",
  role: "Desarrollador Full Stack",
  description: "Apasionado por crear soluciones tecnológicas innovadoras y escalables."
};

export const SkillsData = {
  programming: [
    { name: "JavaScript", icon: JavaScriptSvg },
   // { name: "TypeScript", icon: TypeScriptSvg },
    { name: "React", icon: ReactSvg },
    { name: "Node.js", icon: NodeSvg }
  ],
  tools: [
    { name: "Git", icon: GitSvg },
    { name: "MySQL", icon: MySqlSvg }
  ]
};

export const ContactData = {
  email: "tu.email@ejemplo.com",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario"
}; 