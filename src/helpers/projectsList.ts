import project1 from './../img/projects/project_1.png';
import project2 from './../img/projects/project_2.png';
import project3 from './../img/projects/project_3.png';

import project1Icon from '../img/projects/project_1-icon.png';
import project2Icon from '../img/projects/project_2-icon.png';
import project3Icon from '../img/projects/project_3-icon.png';

export interface ProjectType {
  title: string;
  skills: string;
  img: string;
  icon: string;
  gitHubLink?: string;
  demoLink?: string;
  className: string;
}

export const projects: ProjectType[] = [
  {
    title: 'Travel Service',
    skills: 'HTML, CSS, JavaScript',
    img: project1,
    icon: project1Icon,
    gitHubLink: 'https://github.com/EgorKostiuk/travel-project',
    demoLink: 'https://travel-project-japan.netlify.app',
    className: 'project__img-container',
  },
  {
    title: 'Registration',
    skills: 'HTML, CSS, JavaScript',
    img: project2,
    icon: project2Icon,
    gitHubLink: 'https://github.com/EgorKostiuk/loginform',
    demoLink: 'https://egorkostiuk.github.io/loginform/',
    className: 'project__img-container project__img-container2',
  },
  {
    title: 'YourMeal',
    skills: 'HTML, CSS, JavaScript',
    img: project3,
    icon: project3Icon,
    gitHubLink: 'https://github.com/EgorKostiuk/YourMeal',
    className: 'project__img-container project__img-container3',
  },
];