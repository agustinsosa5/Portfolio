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
        <h2 className="subtitle-section">Antes de conseguir el éxito, debes creer que puedes hacerlo!</h2>
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
            Soy de Montevideo - Uruguay y trabajo en Tecnología de la informacion hace varios años. A través de Jovenes a programar y de forma autodidacta, pude formarme en programación. Te invito a que veas mi portfolio. Pronto iré agregando nuevos projectos en su seccion una vez que esten finalizados. Gracias por tu visita.
          </p>

          <a
            href={`${process.env.REACT_APP_BACKEND_URL}/Document/CV Agustin Sosa - Dev 2024.pdf`}
            target="_blank"
          >
            Ver CV
          </a>
        </div>
      </div>
    </section>
  );
}
