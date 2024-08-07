import React from "react";

import '../components/Projects/Projects.css';

import {Header} from "../components/Header/Header";
import {ProjectsBlock} from "../components/Projects/ProjectsBlock";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header/>
      <ProjectsBlock/>
    </>
  )
}