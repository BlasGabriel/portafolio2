import { VscGithubAlt } from "react-icons/vsc";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const dataContact = [
    {
      id: 1,
      icon: <IoLogoWhatsapp style={{ width: "20px", height: "20px" }} />,
      name: "Whatsapp: +595 973 659 905",
      link: "https://api.whatsapp.com/send?phone=595973659905",
    },
    {
      id: 2,
      icon: <VscGithubAlt style={{ width: "20px", height: "20px" }}/>,
      name: "Github: Blas Gabriel",
      link: "https://github.com/BlasGabriel",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      name: "Linkedin: Blas Gabriel Satacruz Ramirez",
      link: "https://www.linkedin.com/in/blas-gabriel-satacruz-ramirez-11ab0b232",
    },
    {
      id: 4,
      icon: <MdEmail />,
      name: "Correo: blasgabriel200@gmail.com",
      link: "mailto:blasgabriel200@gmail.com",
    },
  ];
  export default dataContact;