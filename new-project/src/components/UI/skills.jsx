import "/src/assets/Styles/skills.css";
import Particles from "./particles";
import "/src/assets/Styles/index.css";
import { SiJavascript } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="container-skills" id="habilidades">
        <Particles />
        <h2 className="tecnologia-title">Tecnologías</h2>
        <div className="skills-grid">
          <i><SiJavascript /></i>
          <img src="public/icons/prueba.jpeg" alt="Boostrap-icon" />
          <img src="/CSS.png" alt="css-icon" />
          <img src="/HTML.png" alt="html-icon" />
          <img src="/IBM-Cloud.png" alt="ibm-icon" />
          <img src="/NodeJS.png" alt="node-icon" />
          <img src="/PostgreSQL.png" alt="posgres-icon" />
          <img src="/Python.png" alt="python-icon" />
          <img src="/React.png" alt="react-icon" />
          <img src="/JavaScript.png" alt="javascript-icon" />
        </div>
      </div>
    </>
  );
}
