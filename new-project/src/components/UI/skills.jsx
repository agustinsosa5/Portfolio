import "/src/assets/Styles/skills.css";
import "/src/assets/Styles/index.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-skills" id="habilidades">
        <h2 className="tecnologia-title">{t("technologies")}</h2>
        <div className="skills-grid">
          <div className="container-img">
            <img src="/icons/Boostrap.webp" alt="Boostrap-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/CSS.webp" alt="css-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/HTML.webp" alt="html-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/IBM-Cloud.webp" alt="ibm-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/NodeJS.webp" alt="node-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/PostgreSQL.webp" alt="posgres-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/Python.webp" alt="python-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/React.webp" alt="react-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/JavaScript.webp" alt="javascript-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
