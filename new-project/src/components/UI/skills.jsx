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
          <img src="/icons/Boostrap.png" alt="Boostrap-icon" />
          <img src="/icons/CSS.png" alt="css-icon" />
          <img src="/icons/HTML.png" alt="html-icon" />
          <img src="/icons/IBM-Cloud.png" alt="ibm-icon" />
          <img src="/icons/NodeJS.png" alt="node-icon" />
          <img src="/icons/PostgreSQL.png" alt="posgres-icon" />
          <img src="/icons/Python.png" alt="python-icon" />
          <img src="/icons/React.png" alt="react-icon" />
          <img src="/icons/JavaScript.png" alt="javascript-icon" />
        </div>
      </div>
    </>
  );
}
