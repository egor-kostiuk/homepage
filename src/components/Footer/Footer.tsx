import React from 'react';

import './Footer.css';

import telegram from "../../img/icons/telegram.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import github from "../../img/icons/github.svg";
import linkedin from "../../img/icons/linkedin.svg";

export const Footer: React.FC  = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__social">
            <li className="footer__social-item"><a href="https://t.me/egor_kostiuk" target={"_blank"}><img src={telegram} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://www.instagram.com/_ve1ry/" target={"_blank"}><img src={instagram} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://x.com/ve1ry_" target={"_blank"}><img src={twitter} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://github.com/egor-kostiuk" target={"_blank"}><img src={github} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://www.linkedin.com/in/egor-kostiuk-02912127a/" target={"_blank"}><img src={linkedin} alt="Link"/></a></li>
          </ul>
          <div className="footer__development">
            <p>© Portfolio, 2023</p>
            <p>Developer:
              <a href="https://t.me/egor_kostiuk" className="footer__development-link" target={"_blank"}> Egor Kostiuk</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}