import {useState, useEffect, useRef} from "react";

import './DarkMode.css';

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";

export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState('light');
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  const toggleDarkMode = () =>{
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="light mode" className="dark-mode-btn__icon"/>
      <img src={moon} alt="dark mode" className="dark-mode-btn__icon"/>
    </button>
  )
}