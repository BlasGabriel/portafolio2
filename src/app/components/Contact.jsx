export default function Contact({ dataContact, cvUrl }) {
  return (
    <section className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 hover:text-blue-600 transition-colors">
        Contacto
      </h2>
      <div className="max-w-md mx-auto flex flex-col items-center gap-4">
        {dataContact.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            className="text-blue-600 hover:text-blue-800 transform transition-transform hover:scale-105"
          >
            {contact.name}
          </a>
        ))}
        <a
          href={cvUrl}
          download
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform transition-transform hover:scale-105"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
} 