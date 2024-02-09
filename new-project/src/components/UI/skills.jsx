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
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/Boostrap.png`} alt="Boostrap-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/CSS.png`} alt="css-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/HTML.png`} alt="html-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/IBM-Cloud.png`} alt="ibm-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/NodeJS.png`} alt="node-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/PostgreSQL.png`} alt="posgres-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/Python.png`} alt="python-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/React.png`} alt="react-icon" />
          <img src={`${process.env.REACT_APP_BACKEND_URL}/icons/JavaScript.png`} alt="javascript-icon" />
        </div>
      </div>
    </>
  );
}
