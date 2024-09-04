import React from "react";
import { useFavicon } from "../hooks/changeFavicon";

import skillIcon from '../img/icons/skills-page-icon.png';

export const SkillsPage: React.FC = () => {
  useFavicon(skillIcon);

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Skills</h1>
        <ul className="content__list">
          <li className="content__list-item">
            <h2 className="title-2">Tech Stack</h2>
            <p>JavaScript, TypeScript, HTML5, CSS3, ReactJS, Webpack, Vite, Git (GitHub), MySQL</p>
          </li>
          <li className="content__list-item">
            <h2 className="title-2">Soft Skills</h2>
            <p>Communication, Assertiveness, Confidence, Fast learner</p>
          </li>
        </ul>
      </div>
    </main>
  )
}