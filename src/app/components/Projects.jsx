import { FaTools } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 hover:text-blue-600 transition-colors">
          Mis Proyectos
      </h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <FaTools className="text-6xl text-blue-600 animate-bounce" />
        <p className="text-xl font-semibold text-gray-700">
          Estamos trabajando para mostrar esta sección.
        </p>
        <p className="text-gray-600 text-center">
          Por favor, vuelve pronto para explorar mis proyectos más recientes.
        </p>
      </div>
    </section>
  );
}
