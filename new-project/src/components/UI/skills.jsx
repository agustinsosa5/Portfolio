import "/src/assets/Styles/skills.css";
import Particles from "./particles";
import "/src/assets/Styles/index.css";

export default function Skills() {
  return (
    <>
      <div className="container-skills" id="habilidades">
        <Particles />
        <h2 className="tecnologia-title">Tecnologías</h2>
        <div className="skills-grid">
          <img src="public/icons/Boostrap.png" alt="Boostrap-icon" />
          <img src="public/icons/CSS.png" alt="css-icon" />
          <img src="public/icons/HTML.png" alt="html-icon" />
          <img src="public/icons/IBM-Cloud.png" alt="ibm-icon" />
          <img src="public/icons/NodeJS.png" alt="node-icon" />
          <img src="public/icons/PostgreSQL.png" alt="posgres-icon" />
          <img src="public/icons/Python.png" alt="python-icon" />
          <img src="public/icons/React.png" alt="react-icon" />
          <img src="public/icons/JavaScript.png" alt="javascript-icon" />
        </div>
      </div>
    </>
  );
}
