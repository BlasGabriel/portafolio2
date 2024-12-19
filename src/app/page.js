'use client';
import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const mid = window.innerHeight / 2;
        
        if (rect.top <= mid && rect.bottom >= mid) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4">
          {["welcome", "projects", "skills", "tools", "contact"].map((section) => (
            <div
              key={section}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeSection === section ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          ))}
        </div>
      </div>

      <section id="welcome">
        <Welcome AboutData={AboutData} />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills skills={skylls} />
      </section>
      <section id="tools">
        <Tools tools={tools} />
      </section>
      <section id="contact">
        <Contact dataContact={dataContact} />
      </section>
    </div>
  );
}
