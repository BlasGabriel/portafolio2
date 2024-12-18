export default function Welcome({ AboutData }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="text-center transform transition-transform hover:scale-105">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenido a mi Portafolio
        </h1>
        <h2 className="text-3xl mb-2">{AboutData.name}</h2>
        <p className="text-xl">{AboutData.role}</p>
      </div>
    </section>
  );
} 