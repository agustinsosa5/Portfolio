import "../../assets/Styles/section.css";
import "../../assets/Styles/index.css";

export default function section() {
  return (
    <section className="section">
      <div className="circle"></div>
      <div className="title">
        <h1 className="title-section">
          Web Developer
          <span className="punto">.</span>
        </h1>
        <h2 className="subtitle-section">Antes de conseguir el éxito, debes creer que puedes hacerlo.!</h2>
      </div>
      <div className="container-section">
        <div className="container-photo">
          <img
            srcSet="https://avatars.githubusercontent.com/u/110437605?s=400&u=675d3878b444221e0771678576f7a314bfc437cc&v=4"
            alt="avatar"
            className="photo"
          />
        </div>
        <div className="section-elements">
          <h2>Agustín Sosa</h2>
          <p>
            Trabajo en el area Tecnología de la informacion desde hace varios años. En 2021 volví a la programacion y comencé a capacitarme nuevamente.          Te invito a ver a mi curriculum y los proyectos que he realizado.Puedes contactarme si lo deseas, Gracias por tu visita.
          </p>

          <a
            href={`${process.env.REACT_APP_BACKEND_URL}/Document/Curriculum-Agustin-Sosa.pdf`}
            target="_blank"
          >
            Ver CV
          </a>
        </div>
      </div>
    </section>
  );
}
