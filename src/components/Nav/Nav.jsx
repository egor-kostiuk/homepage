import './Nav.css';

import {NavLink} from "react-router-dom";
import {DarkModeButton} from "../Buttons/DarkModeButton";


export const Nav = () => {
  const activeLink = 'nav__list-link nav__list-link--active'
  const normalLink = 'nav__list-link'

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__row">
          <NavLink to={'/'} className={'nav__title'}>
            <strong>Developer </strong>
            <span>portfolio</span>
          </NavLink>
          <DarkModeButton/>
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