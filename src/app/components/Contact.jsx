import ButtonCV from "./ButtonCV";

export default function Contact({ dataContact }) {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-blue-50 to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 hover:text-blue-600 transition-colors">
        Contacto
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {dataContact.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 bg-white p-3 rounded-lg shadow-md transform transition-transform hover:scale-105"
          >
            <span className="text-2xl text-blue-600">{contact.icon}</span>
            <span className="text-lg font-medium">{contact.name}</span>
          </a>
        ))}
        <div className="md:col-span-2 flex justify-center mt-4">
          <ButtonCV />
        </div>
      </div>
    </section>
  );
}
