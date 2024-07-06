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
            <img src="/icons/Boostrap.png" alt="Boostrap-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/CSS.png" alt="css-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/HTML.png" alt="html-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/IBM-Cloud.png" alt="ibm-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/NodeJS.png" alt="node-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/PostgreSQL.png" alt="posgres-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/Python.png" alt="python-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/React.png" alt="react-icon" />
          </div>
          <div className="container-img">
            <img src="/icons/JavaScript.png" alt="javascript-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
