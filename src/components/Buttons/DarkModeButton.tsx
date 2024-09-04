import React from 'react';
import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

import './DarkMode.css';

export const DarkModeButton: React.FC = () => {
  const [darkMode, setDarkMode] = useLocalStorage<string>('darkMode', 'light');
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      if (btnRef.current) {
        btnRef.current.classList.add('dark-mode-btn--active');
      }
    } else {
      document.body.classList.remove('dark');
      if (btnRef.current) {
        btnRef.current.classList.remove('dark-mode-btn--active');
      }
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