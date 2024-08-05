import './Footer.css';

import telegram from "../../img/icons/telegram.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import github from "../../img/icons/github.svg";
import linkedin from "../../img/icons/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__social">
            <li className="footer__social-item"><a href="https://t.me/egor_kostiuk"><img src={telegram} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://www.instagram.com/_ve1ry/"><img src={instagram} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://x.com/ve1ry_"><img src={twitter} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://github.com/egor-kostiuk"><img src={github} alt="Link"/></a></li>
            <li className="footer__social-item"><a href="https://www.linkedin.com/in/egor-kostiuk-02912127a/"><img src={linkedin} alt="Link"/></a></li>
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
  )
}