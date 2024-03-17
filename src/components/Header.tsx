import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const Header = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const clickHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header>
      <span className="title">{`< Kritika Bandekar />`}</span>
      <span className="head-options">
        <span className="menu">Contact</span>
        <span onClick={clickHandler}>
          {theme === "light" ? (
            <i className="fa-solid fa-moon  icon-val"></i>
          ) : (
            <i className="fa-solid fa-sun icon-val"></i>
          )}

          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </span>
    </header>
  );
};

export default Header;
