
import  { useState, useEffect, useCallback } from "react";
import sprite from "../../../../assets/sprite.svg";
import css from './ThemeProvider.module.css';

const themes = ["theme1", "theme2", "theme3", "theme4", "theme5"];

export const ThemeProvider = () => {
  const savedThemeIndex = localStorage.getItem('themeProvider');
  const initialThemeIndex = savedThemeIndex !== null ? parseInt(savedThemeIndex) : 0;
  const [currentThemeIndex, setCurrentThemeIndex] = useState(initialThemeIndex);

  const applyTheme = useCallback((themeIndex) => {
    document.documentElement.setAttribute("data-theme", themes[themeIndex]);
    localStorage.setItem("themeProvider", themeIndex);
  }, []);

  const changeTheme = useCallback(() => {
    const newThemeIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(newThemeIndex);
    applyTheme(newThemeIndex);
  }, [currentThemeIndex, applyTheme]);

  useEffect(() => {
    applyTheme(initialThemeIndex);
  }, [initialThemeIndex, applyTheme]);

  return (
    <div>
      <button className={css.theme} type="button" onClick={changeTheme}>
        <svg className={css.themeIcon} width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-image`}></use>
        </svg>
      </button>
    </div>
  );
};



