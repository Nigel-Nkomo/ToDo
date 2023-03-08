import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

export default function Header({ toggleTheme, theme }) {
  return (
    <>
      <header className="header">
        <h1 className="header__heading">todo</h1>

        {/*toggle the value of theme*/}
        <button onClick={toggleTheme} className="header__button">
          {theme === "light-theme" ? (
            //use size to style bootstrap icon size
            <BsFillMoonFill className="header__icon" size={30} />
          ) : (
            //use size to style bootstrap icon size
            <BsSunFill className="header__icon" size={30} />
          )}
        </button>
      </header>
    </>
  );
}
