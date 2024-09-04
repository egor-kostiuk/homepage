import React from 'react';
import {NavLink} from 'react-router-dom';

import './Projects.css';

interface ProjectItemProps {
  title: string;
  img: string;
  className?: string;
  index: number;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ title, img, className, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project__item">
        <div className={className}>
          <img src={img} alt={title} className="project__image" />
        </div>
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};
