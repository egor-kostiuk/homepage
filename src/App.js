import './styles/index.css';
import {Nav} from "./components/Nav/Nav";
import {Header} from "./components/Header/Header";

import {Link} from "react-router-dom";
import project1 from './img/projects/project_1.png';
import project2 from './img/projects/project_2.png';

import project3 from './img/projects/project_3.png';
import telegram from './img/icons/telegram.svg';
import instagram from './img/icons/instagram.svg';
import twitter from './img/icons/twitter.svg';
import github from './img/icons/github.svg';
import linkedin from './img/icons/linkedin.svg';

function App() {
  return (
    <div className={'App'}>
      {/*{Nav}*/}
      <Nav/>

      {/*{Header}*/}
      <Header/>

      {/*{Projects}*/}
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

      {/*{Footer}*/}
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="footer__social">
              <li className="footer__social-item"><a href="#!"><img src={telegram} alt="Link"/></a></li> {/*{TODO: link social}*/}
              <li className="footer__social-item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
              <li className="footer__social-item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
              <li className="footer__social-item"><a href="#!"><img src={github} alt="Link"/></a></li>
              <li className="footer__social-item"><a href="#!"><img src={linkedin} alt="Link"/></a></li>
            </ul>

            <div className="footer__development">
              <p>© Portfolio, 2023</p>
              <p>Developer:
                <a href="https://t.me/retrosy" className="footer__development-link"> Egor Kostiuk</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
