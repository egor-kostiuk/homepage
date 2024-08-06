import React from 'react'
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Egor</em></strong><br/>
          <span>a full stack developer</span>
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://github.com/egor-kostiuk" className="btn" target={"_blank"}>View GitHub</a>
      </div>
    </header>
  )
}