import {Header} from "../components/Header/Header";

import project1 from "../img/projects/project_1.png";
import project2 from "../img/projects/project_2.png";
import project3 from "../img/projects/project_3.png";

export const HomePage = () => {
  return (
    <>
    <Header/>
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="project__list">
        {/*{Project 1}*/}
        <li className="project__item">
          <a href="./projects html/project-page1.html">
            <div className="project__image-container">
              <img src={project1} alt="Project image" className="project__image"/>
            </div>
            <h3 className="project__title">Travel service</h3>
          </a>
        </li>
        {/*{Project 2}*/}
        <li className="project__item">
          <a href="./projects html/project-page2.html">
            <div className="project__image-container project__image-container2">
              <img src={project2} alt="Project image" className="project__image"/>
            </div>
            <h3 className="project__title">Login Register</h3>
          </a>
        </li>
        {/*{Project 3}*/}
        <li className="project__item">
          <a href="./projects html/project-page3.html">
            <div className="project__image-container project__image-container3">
              <img src={project3} alt="Project image" className="project__image"/>
            </div>
            <h3 className="project__title">YourMeal</h3>
          </a>
        </li>
        </ul>
      </div>
    </main>
    </>
  )
}