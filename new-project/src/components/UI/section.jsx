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
        <p className="p-section">
          Ser mejor que ayer y continuar avanzando!
        </p>
      </div>
      <div className="container-section">
        <div className="container-photo">
          <img
            src="./src/assets/images/Agust-foto.png"
            alt="avatar"
            className="photo"
          />
        </div>
        <div className="section-elements">
          <h2>Agustín Sosa</h2>
          <p>
            Mi objetivo cada día es aprender, practicar y compartir a contigo mi
            experiencia. Te invito a ver a mi curriculum y los proyectos en los
            que he trabajado. Puedes contactarme si lo deseas, Gracias por tu
            visita.
          </p>

          <a
            href="./src/assets/Document/Curriculum Agustin Sosa.pdf"
            target="_blank"
          >
            Ver CV
          </a>
        </div>
      </div>
    </section>
  );
}
