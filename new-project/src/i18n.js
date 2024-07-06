// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Web Developer",
      "subtitle" : "Before you achieve success, you must believe that you can do it!",
      "section": {
        "p1": "I am from Montevideo, Uruguay and currently work as an IT Analyst supporting Banco de la República Oriental del Uruguay" ,
        "p2" : "I started studying web development in 2021 and continue to train. I am currently working on personal projects. Which, once they are finished, I will add them in the projects section. Thank you visit my site"
      },      
      "skills": "Skills",
      "projects": "Projects",
      "technologies" : "Technologies",
      "contact": "Contact",
      "footer" : "CONTACT"
    }
  },
  es: {
    translation: {
      "title": "Desarrollador Web",
      "subtitle": "Antes de conseguir el éxito, debes creer que puedes hacerlo!",
      "skills": "Habilidades",
      "section.p1": "Soy de Montevideo, Uruguay y actualmente trabajo como Analista de TI apoyando al Banco de la República Oriental del Uruguay",
      "section.p2" : "Comencé a estudiar desarrollo web en 2021 y continúo formandome. Actualmente estoy trabajando en proyectos personales. Lo cual, una vez esten finalizados, los iré agregando en la sección proyectos. Gracias visitar mi sitio.",
      "projects": "Proyectos",
      "technologies" : "Tecnologias",
      "contact": "Contacto",
      "footer": "CONTACTO"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Lenguaje inicial
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
