import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import { AboutData } from "../data/PortfolioData";
import { skylls } from "../data/SkyllsData.jsx";
import tools from "../data/ToolsData.jsx";
import dataContact from "../data/ContactData.jsx";

export default function Home() {
  const cvUrl = "/ruta-a-tu-cv.pdf"; // Añade la ruta a tu CV

  return (
    <div className="min-h-screen bg-gray-50">
      <Welcome AboutData={AboutData} />
      <Projects />
      <Skills skills={skylls} />
      <Tools tools={tools} />
      <Contact dataContact={dataContact} cvUrl={cvUrl} />
    </div>
  );
}
