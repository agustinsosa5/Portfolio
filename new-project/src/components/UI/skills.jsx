import "/src/assets/Styles/skills.css";
import "/src/assets/Styles/index.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const icons = [
    {
      src: "/icons/Boostrap.webp",
      alt: "Boostrap",
    },
    {
      src: "/icons/CSS.webp",
      alt: "css-icon",
    },
    {
      src: "/icons/HTML.webp",
      alt: "HTML-icon",
    },
    {
      src: "/icons/Git.webp",
      alt: "Git-icon",
    },
    {
      src: "/icons/NodeJS.webp",
      alt: "NodeJs-icon",
    },
    {
      src: "/icons/MySQL.webp",
      alt: "MySQL-icon",
    },
    {
      src: "/icons/Python.webp",
      alt: "Python-icon",
    },
    {
      src: "/icons/React.webp",
      alt: "React-icon",
    },
    {
      src: "/icons/JavaScript.webp",
      alt: "Javascript-icon",
    },
  ];
  return (
    <>
      <div className="container-skills" id="habilidades">
        <h2 className="tecnologia-title">{t("technologies")}</h2>
        <div className="skills-grid">
          {icons.map((icon, index) => (
            <div className="container-img" key={index}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
