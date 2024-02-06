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
          <img src="public/Boostrap.png" alt="Boostrap-icon" />
          <img src="public/CSS.png" alt="css-icon" />
          <img src="public/HTML.png" alt="html-icon" />
          <img src="public/IBM-Cloud.png" alt="ibm-icon" />
          <img src="public/NodeJS.png" alt="node-icon" />
          <img src="public/PostgreSQL.png" alt="posgres-icon" />
          <img src="public/Python.png" alt="python-icon" />
          <img src="public/React.png" alt="react-icon" />
          <img src="public/JavaScript.png" alt="javascript-icon" />
        </div>
      </div>
    </>
  );
}
