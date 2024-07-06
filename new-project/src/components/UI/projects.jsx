import React from 'react';
import "../../assets/Styles/projects.css";
import "../../assets/Styles/index.css";
import { useTranslation } from "react-i18next";

export default function ProjectsList() {
  const { t } = useTranslation();

  // Lista de imágenes para los proyectos con posibles enlaces
  const projects = [
    {
      src: 'https://images.unsplash.com/photo-1649940652572-7603b62c0a85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Project 1',
      link: '#',
      description: 'Descripción del proyecto 1'
    },
    {
      src: 'https://s0.smartresize.com/wallpaper/766/607/HD-wallpaper-hello-world-orange-saying.jpg',
      alt: 'Project 2',
      link: '#',
      description: 'Descripción del proyecto 2'
    },
    {
      src: 'https://s0.smartresize.com/wallpaper/895/617/HD-wallpaper-programming-typography-code-computer-programming-syntax.jpg',
      alt: 'Project 3',
      link: '#',
      description: 'Descripción del proyecto 3'
    },
    {
      src: 'https://s0.smartresize.com/wallpaper/360/630/HD-wallpaper-saying-dead-penguins-quotes-squad-stop-tank-tanks-teams-walking-world.jpg',
      alt: 'Project 4',
      link: '#',
      description: 'Descripción del proyecto 4'
    },
    {
      src: 'https://s0.smartresize.com/wallpaper/737/721/HD-wallpaper-tag-code-hacker-programming-javascript-python-coder-software-coding-computer-science-css-web-design-html-linux-html5-programmer-laptop-tech-php-developer.jpg',
      alt: 'Project 5',
      link: '#',
      description: 'Descripción del proyecto 5'
    },
    {
      src: 'https://s0.smartresize.com/wallpaper/958/965/HD-wallpaper-secured-edge-hack-hacker-lock-screen-professional-prt-rgb-text.jpg',
      alt: 'Project 6',
      link: '#',
      description: 'Descripción del proyecto 6'
    }
  ];

  return (
    <div className="project-section">
      <h2 id="project-title">{t('projects')}</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="container-project" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.src} alt={project.alt} />
            </a>
            <div className='descripcion-card'>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
