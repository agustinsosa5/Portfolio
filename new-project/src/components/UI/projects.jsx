import "../../assets/Styles/projects.css";
import "../../assets/Styles/index.css";

export default function ProjectsList() {
  return (
    <div className="project-section">
      <h2 id="project-title">Proyectos</h2>
      <div className="projects-list">
        <div className="container-project">
          <img src="./src/assets/images/1.png"></img>
        </div>
        <div className="container-project">
          <img src="./src/assets/images/2.jpg"></img>
        </div>
        <div className="container-project">
          <img src="./src/assets/images/3.png"></img>
        </div>
        <div className="container-project">
          <img src="./src/assets/images/4.jpg"></img>
        </div>
        <div className="container-project">
          <img src="./src/assets/images/5.png"></img>
        </div>
        <div className="container-project">
          <img src="./src/assets/images/6.jpg"></img>
        </div>
      </div>
    </div>
  );
}
