import Image from "next/image";

export default function Tools({ tools }) {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 hover:text-blue-600 transition-colors">
        Herramientas
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className="flex flex-col items-center transform transition-transform hover:scale-110"
            >
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
  );
} 