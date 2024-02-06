import "../../assets/Styles/projects.css";
import "../../assets/Styles/index.css";

export default function ProjectsList() {
  return (
    <div className="project-section">
      <h2 id="project-title">Proyectos</h2>
      <div className="projects-list">
        <div className="container-project">
          <img srcSet="https://images.unsplash.com/photo-1649940652572-7603b62c0a85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>
        <div className="container-project">
          <img srcSet="https://s0.smartresize.com/wallpaper/766/607/HD-wallpaper-hello-world-orange-saying.jpg"></img>
        </div>
        <div className="container-project">
          <img srcSet="https://s0.smartresize.com/wallpaper/895/617/HD-wallpaper-programming-typography-code-computer-programming-syntax.jpg"></img>
        </div>
        <div className="container-project">
          <img srcSet="https://s0.smartresize.com/wallpaper/360/630/HD-wallpaper-saying-dead-penguins-quotes-squad-stop-tank-tanks-teams-walking-world.jpg"></img>
        </div>
        <div className="container-project">
          <img srcSet="https://s0.smartresize.com/wallpaper/737/721/HD-wallpaper-tag-code-hacker-programming-javascript-python-coder-software-coding-computer-science-css-web-design-html-linux-html5-programmer-laptop-tech-php-developer.jpg"></img>
        </div>
        <div className="container-project">
          <img srcSet="https://s0.smartresize.com/wallpaper/958/965/HD-wallpaper-secured-edge-hack-hacker-lock-screen-professional-prt-rgb-text.jpg"></img>
        </div>
      </div>
    </div>
  );
}
