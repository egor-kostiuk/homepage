import React from "react";
import {useFavicon} from "../hooks/changeFavicon";

import '../components/Projects/Projects.css';

import homeIcon from '../img/icons/main-page-icon.png';

import {Header} from "../components/Header/Header";
import {ProjectsBlock} from "../components/Projects/ProjectsBlock";

export const HomePage: React.FC = () => {
  useFavicon(homeIcon);

  return (
    <>
      <Header/>
      <ProjectsBlock/>
    </>
  )
}