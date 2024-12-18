import Image from "next/image";

export default function Skills({ skills }) {
  return (
    <section className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 hover:text-blue-600 transition-colors">
        Mis Habilidades
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="flex flex-col items-center transform transition-transform hover:scale-110"
            >
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
  );
} 