import React from 'react';

import { ProjectItem } from './ProjectItem';
import { projects } from '../../helpers/projectsList';

import './Projects.css';

export const ProjectsBlock: React.FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="project__list">
          {projects.map((project, index) => {
            return (
              <ProjectItem
                key={index}
                title={project.title}
                img={project.img}
                className={`project__image-container project__image-container${index + 1}`}
                index={index}
              />
            )
          })}
        </ul>
      </div>
    </main>
  )
}