import { Badge, Stack } from "react-bootstrap";
import ReactSvg from "../assets/react.svg";
import NodeSvg from "../assets/node.svg";
import MySqlSvg from "../assets/mysql.svg";
import NotionSvg from "../assets/notion.svg";
import ScrumSvg from "../assets/scrum.svg";
import Portfolio0Svg from "../assets/Portafolio/Portafolio0.png";
import Portfolio1Svg from "../assets/Portafolio/Portafolio1.png";
import MuiSvg from "../assets/mui.svg";
import BootstrapSvg from "../assets/bootstrap.svg";
import BadgeComponent from "../components/BadgeComponent";
import StockVentas1Svg from "../assets/stock-ventas/Stock-Ventas1.png";
import StockVentas2Svg from "../assets/stock-ventas/Stock-Ventas2.png";
import StockVentas3Svg from "../assets/stock-ventas/Stock-Ventas3.png";
import StockVentas4Svg from "../assets/stock-ventas/Stock-Ventas4.png";
import Bar1 from "../assets/Bar/Bar1.png";
import Bar2 from "../assets/Bar/Bar2.png";
import Bar3 from "../assets/Bar/Bar3.png";
import Bar4 from "../assets/Bar/Bar4.png";


const WorkData = [
  {
    id: 1,
    title: "Maqueta de Clientes",
    src: [Bar1, Bar2, Bar3, Bar4],
    link: "https://github.com/ShyrleyFlor/Bar_page.git",
    skylls: (
      <Stack direction="horizontal" gap={1}>
        <BadgeComponent src={ReactSvg}>React</BadgeComponent>
        <BadgeComponent src={NodeSvg}>Node</BadgeComponent>
        <BadgeComponent src={NotionSvg}>Notion</BadgeComponent>
        <BadgeComponent src={ScrumSvg}>Scrum</BadgeComponent>
        <BadgeComponent mg src={MuiSvg}>Mui</BadgeComponent>
      </Stack>
    ),
    description: (
      <>
        <h5>Maqueta del módulo de clientes</h5>
        Tecnologías: React, Material UI, Node.js, MySql, Api Rest <br />
        Metodología: Agile Scrum
        <br />
        Características:
        <br />
        <ul>
          <li>Creación, modificación y eliminación de clientes. </li>
          <li>Creación, modificación y eliminación de ciudades.</li>
          <li>Creación, modificación y eliminación de barrios.</li>
          <li>Creación, modificación y eliminación de funcionarios.</li>
          <li>Creación, modificación y eliminación de profesion.</li>
        </ul>
        El módulo está desarrollado con React, Node.js y MySql. La comunicación
        entre el frontend y el backend se realiza a través de una Api Rest.
        <br />
        El proyecto fue realizado en conjunto con un equipo de desarrollo de 4
        personas. El trabajo fue diseñado y puesto en producción mediante el
        método Agile Scrum. La documentación se llevó a cabo utilizando Notion.
      </>
    ),
  },
  {
    id: 2,
    title: "Gestión de stock y control de ventas",
    src: [StockVentas1Svg,StockVentas2Svg,StockVentas3Svg,StockVentas4Svg],
    link: "https://github.com/ShyrleyFlor/Bar_page.git",
    skylls: (
      <Stack direction="horizontal" gap={1}>
        <BadgeComponent src={ReactSvg}>React</BadgeComponent>
        <BadgeComponent src={NodeSvg}>Node</BadgeComponent>
        <BadgeComponent src={NotionSvg}>Notion</BadgeComponent>
        <BadgeComponent src={ScrumSvg}>Scrum</BadgeComponent>
        <BadgeComponent mg src={MuiSvg}>Mui</BadgeComponent>
      </Stack>
    ),
    description: (
      <>
        <h5>Gestión de stock y control de ventas</h5>
        Tecnologías: React, Material UI, Node.js, Sequelize, MySql, Api Rest{" "}
        <br />
        Metodología: Agile Scrum
        <br />
        Características:
        <br />
        <ul>
          <li>Gestión de stock</li>
          <li>Control de ventas</li>
          <li>Control de deudas de clientes</li>
          <li>Generación de informes PDF</li>
          <li>Diferentes roles de usuario</li>
          <li>Login</li>
        </ul>
        El módulo está desarrollado con React, Node.js y MySql. La comunicación
        entre el frontend y el backend se realiza a través de una Api Rest.
        <br />
        El proyecto fue realizado en conjunto con un equipo de desarrollo de 3
        personas. El trabajo fue diseñado y puesto en producción mediante el
        método Agile Scrum. La documentación se llevó a cabo utilizando Notion.
      </>
    ),
  },
  {
    id: 3,
    title: "Portafolio",
    src: [Portfolio0Svg,Portfolio1Svg],
    link: "https://github.com/ShyrleyFlor/Bar_page.git",
    skylls: (
      <Stack direction="horizontal" gap={1}>
        <BadgeComponent src={ReactSvg}>React</BadgeComponent>
        <BadgeComponent src={NotionSvg}>Notion</BadgeComponent>
        <BadgeComponent src={BootstrapSvg}>Bootstrap</BadgeComponent>
      </Stack>
    ),
    description: (
      <>
        <h5>Portafolio</h5>
        Tecnologías: React, Material UI, Node.js, Sequelize, MySql, Api Rest{" "}
        <br />
        Metodología: Agile Scrum
        <br />
        Características:
        <br />
        <ul>
          <li>Gestión de stock</li>
          <li>Control de ventas</li>
          <li>Control de deudas de clientes</li>
          <li>Generación de informes PDF</li>
          <li>Diferentes roles de usuario</li>
          <li>Login</li>
        </ul>
        El módulo está desarrollado con React, Node.js y MySql. La comunicación
        entre el frontend y el backend se realiza a través de una Api Rest.
        <br />
        El proyecto fue realizado en conjunto con un equipo de desarrollo de 3
        personas. El trabajo fue diseñado y puesto en producción mediante el
        método Agile Scrum. La documentación se llevó a cabo utilizando Notion.
      </>
    ),
  },
];

export default WorkData;
