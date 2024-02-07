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
          <img src="/server/icons/Boostrap.png" alt="Boostrap-icon" />
          <img src="/server/icons/CSS.png" alt="css-icon" />
          <img src="/server/icons/HTML.png" alt="html-icon" />
          <img src="/server/icons/IBM-Cloud.png" alt="ibm-icon" />
          <img src="/server/icons/NodeJS.png" alt="node-icon" />
          <img src="/server/icons/PostgreSQL.png" alt="posgres-icon" />
          <img src="/server/icons/Python.png" alt="python-icon" />
          <img src="/server/icons/React.png" alt="react-icon" />
          <img src="/server/icons/JavaScript.png" alt="javascript-icon" />
        </div>
      </div>
    </>
  );
}
