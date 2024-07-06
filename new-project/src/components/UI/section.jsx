import "../../assets/Styles/section.css";
import "../../assets/Styles/index.css";
import { useTranslation } from "react-i18next";

export default function section() {

  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="circle"></div>
      <div className="title">
        <h1 className="title-section">
          {t('title')}
          <span className="punto">.</span>
        </h1>
        <h2 className="subtitle-section">
        {t('subtitle')}
        </h2>
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
            {t('section.p1')}
          </p>
          <br />
          <p>
          {t('section.p2')}
          </p>
        </div>
      </div>
    </section>
  );
}
