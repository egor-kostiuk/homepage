import { FC } from 'react';
import { useEffect, useRef } from 'react';
import { LocalStorage } from '../../../utils/local-storage';

import sun from '../../../assets/icons/dark-mode/sun.svg'
import moon from '../../../assets/icons/dark-mode/moon.svg'

import './DarkModeButton.css';

export const DarkModeButton: FC = () => {
  const [darkMode, setDarkMode] = LocalStorage<string>('darkMode', 'light');
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
    setDarkMode((currentValue: string) => {
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