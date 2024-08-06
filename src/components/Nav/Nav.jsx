import './Nav.css';

import {NavLink} from "react-router-dom";

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";

export const Nav = () => {
  const activeLink = 'nav__list-link nav__list-link--active'
  const normalLink = 'nav__list-link'

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__row">
          <NavLink to={'/'} className={'nav__title'}>
            <strong>Developer</strong>
            <span>portfolio</span>
          </NavLink>
          <button className="dark-mode-btn">
            <img src={sun} alt="light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="dark mode" className="dark-mode-btn__icon"/>
          </button>
          <ul className="nav__list">
            <li className="nav___list-item">
              <NavLink to={'/'} className={({isActive}) => isActive ? activeLink : normalLink}>
                Projects
              </NavLink>
            </li>
            <li className="nav___list-item">
              <NavLink to={'/skills'} className={({isActive}) => isActive ? activeLink : normalLink}>
                Skills
              </NavLink>
            </li>
            <li className="nav___list-item">
              <NavLink to={'/contacts'} className={({isActive}) => isActive ? activeLink : normalLink}>
                Contacts
              </NavLink>
            </li>
            <li className="nav___list-item">
              <NavLink to={'/biography'} className={({isActive}) => isActive ? activeLink : normalLink}>
                Biography
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}