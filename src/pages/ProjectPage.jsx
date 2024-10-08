import { useParams } from 'react-router-dom';
import { useFavicon } from '../hooks/changeFavicon';

import { projects } from '../helpers/projectsList';
import gitHubIcon from '../img/icons/github_mini.svg';
import netlifyIcon from '../img/icons/netlify.svg';

export const ProjectPage = () => {
  const {id} = useParams();
  const project = projects[id];

  useFavicon(project.icon);

  return (
    <main className="section">
      <div className="container">
        <div className="project__wrapper">
          <h1 className="title-1">{project.title}</h1>
          <div className={project.className}>
            <img src={project.img} alt="project photo" className="project__img"/>
          </div>
          <div className="project__description">
            <p>Skills: HTML, CSS, JavaScript</p>
          </div>
          <div className="buttons">
            <a href={project.gitHubLink} className="btn-outline" target={"_blank"}>
              <img src={gitHubIcon} alt="code"/>
                GitHub repo
            </a>
            {project.demoLink && (
              <a href={project.demoLink} className="btn-outline" target={"_blank"}>
                <img src={netlifyIcon} alt="demo"/>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}