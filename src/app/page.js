import Image from "next/image";
import { AboutData, SkillsData, ContactData } from "../data/PortfolioData";
import { skylls } from "../data/SkyllsData.jsx"
import  tools  from "../data/ToolsData.jsx"
import  dataContact  from "../data/ContactData.jsx"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección de Bienvenida */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Bienvenido a mi Portafolio
          </h1>
          <h2 className="text-3xl mb-2">{AboutData.name}</h2>
          <p className="text-xl">{AboutData.role}</p>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí puedes mapear tus proyectos del WorkData */}
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section className="py-20 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Habilidades</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skylls.map((skill) =>(

            
              <div key={skill.id} className="flex flex-col items-center">
                <Image
                  src={skill.src}
                  alt={skill.title}
                  width={50}
                  height={50}
                />
                <p className="mt-2">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Herramientas */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Herramientas</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.id} className="flex flex-col items-center">
                <Image
                  src={tool.src}
                  alt={tool.title}
                  width={50}
                  height={50}
                />
                <p className="mt-2">{tool.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
        <div className="max-w-md mx-auto flex flex-col items-center gap-4">
          {dataContact.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              className="text-blue-600 hover:text-blue-800"
            >
              {contact.name}
            </a>
          ))}
          {/* <a href={`mailto:${ContactData.email}`} className="text-blue-600 hover:text-blue-800">
            {ContactData.email}
          </a>
          <a href={ContactData.linkedin} className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </a>
          <a href={ContactData.github} className="text-blue-600 hover:text-blue-800">
            GitHub
          </a> */}
        </div>
      </section>
    </div>
  );
}
