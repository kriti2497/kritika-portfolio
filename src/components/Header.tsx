/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const Header: React.FC<{ scrollToContact: () => void }> = ({
  scrollToContact,
}) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const clickHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header>
      <span className="title">{`Kritika Bandekar`}</span>
      <span className="head-options">
        <span className="menu" onClick={scrollToContact}>
          Contact
        </span>
        <span onClick={clickHandler}>
          {theme === "light" ? (
            <i className="fa-solid fa-moon  icon-val"></i>
          ) : (
            <i className="fa-solid fa-sun icon-val"></i>
          )}
        </span>
      </span>
    </header>
  );
};

export default Header;
