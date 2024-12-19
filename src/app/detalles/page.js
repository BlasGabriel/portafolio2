export default function Detalles() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Perfil Profesional</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Educación</h2>
          <p className="text-lg text-gray-700">Ingeniero de Sistemas 2024</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experiencia Laboral</h2>
          <ul className="space-y-4 text-gray-700">
            <li>• Desarrollador en E-One (desde noviembre 2023)
              <p className="ml-4">Utilizando Apex Oracle y Jaspersoft Studio</p>
            </li>
            <li>• Desarrollador de sistema para gestión de presencia y contenidos
              <p className="ml-4">Facultad de Economía UNE sede central</p>
            </li>
            <li>• Pasantía en MiLab</li>
          </ul>
        </section>

        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Habilidades</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Planificación y desarrollo de proyectos de software</li>
            <li>• Manejo de Servidores Linux</li>
            <li>• Desarrollo web con Node.js y React</li>
            <li>• Control de versiones con Git</li>
            <li>• Gestión de bases de datos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tecnologías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <div>• Apex Oracle</div>
            <div>• Jaspersoft Studio</div>
            <div>• Servidores Linux</div>
            <div>• Oracle</div>
            <div>• MongoDB</div>
            <div>• MySQL</div>
            <div>• React</div>
            <div>• Material-UI</div>
            <div>• Node.js</div>
            <div>• HTML/CSS</div>
            <div>• JavaScript</div>
            <div>• PHP</div>
          </div>
        </section> */}
      </div>
    </div>
  );
}