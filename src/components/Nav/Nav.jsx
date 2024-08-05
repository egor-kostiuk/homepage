import './Nav.css';

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__row">
          <a href="./index.html" className="nav__title">
            <strong>Developer</strong>
            <span>portfolio</span>
          </a>
          <button className="dark-mode-btn">
            <img src={sun} alt="light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="dark mode" className="dark-mode-btn__icon"/>
          </button>
          <ul className="nav__list">
            <li className="nav___list-item">
              <a href="./index.html" className="nav__list-link nav__list-link--active">Projects</a>
            </li>
            <li className="nav___list-item">
              <a href="./skills.html" className="nav__list-link">Skills</a>
            </li>
            <li className="nav___list-item">
              <a href="./contacts.html" className="nav__list-link">Contacts</a>
            </li>
            <li className="nav___list-item">
              <a href="./biography.html" className="nav__list-link">Biography</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}