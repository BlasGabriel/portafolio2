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
  const cvUrl =       "https://drive.google.com/file/d/1ZIrR5vM4ffQQVfEKQziSdd3ijWOOGc6L/view?usp=sharing";
  // Añade la ruta a tu CV
  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1ZIrR5vM4ffQQVfEKQziSdd3ijWOOGc6L/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.click();
  };

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
