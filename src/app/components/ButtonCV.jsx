import { FaFileDownload } from "react-icons/fa";

export default function ButtonCV() {
  const cvUrl = "https://drive.google.com/file/d/1ZIrR5vM4ffQQVfEKQziSdd3ijWOOGc6L/view?usp=sharing";

  return (
    <a
      href={cvUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform transition-transform hover:scale-105"

    //   className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transform transition-transform hover:scale-105 hover:from-blue-600 hover:to-blue-800"
    >
      <FaFileDownload className="text-xl" />
      <span className="font-semibold text-lg">Descargar CV</span>
    </a>
  );
}
