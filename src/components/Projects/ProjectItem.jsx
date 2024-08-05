import './Projects.css';

export const ProjectItem = ({title, img, className}) => {
  return (
    <li className="project__item">
      <a href="./projects html/project-page1.html">
        <div className={className}>
          <img src={img} alt={title} className="project__image"/>
        </div>
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  )
}