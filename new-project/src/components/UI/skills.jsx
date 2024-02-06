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
          <img src="src/icons/Boostrap.png" alt="Boostrap-icon" />
          <img src="src/icons/CSS.png" alt="css-icon" />
          <img src="src/icons/HTML.png" alt="html-icon" />
          <img src="src/icons/IBM-Cloud.png" alt="ibm-icon" />
          <img src="src/icons/NodeJS.png" alt="node-icon" />
          <img src="src/icons/PostgreSQL.png" alt="posgres-icon" />
          <img src="src/icons/Python.png" alt="python-icon" />
          <img src="src/icons/React.png" alt="react-icon" />
          <img src="src/icons/JavaScript.png" alt="javascript-icon" />
        </div>
      </div>
    </>
  );
}
