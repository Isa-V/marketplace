import { useState } from "react";
import "../Styles/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./Assets/logo.svg";

const NavBar = () => {
  const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  const [menuClass, setMenuClass] = useState ('navMenu menuHidden');
  const [isMenuClicked, setInMenuClicked] = useState (false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burgerBar clicked');
      setMenuClass('navMenu menuVisible');
    }else{
      setBurgerClass('burgerBar unclicked');
      setMenuClass('navMenu menuHidden');
    }
    setInMenuClicked(!isMenuClicked);
  }

  return (
    <nav>
      <div className="navContainer">
        <div className="navBurgerButton"  onClick={updateMenu}>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
          <div className={burgerClass}> </div>
        </div>

        <div className="navLogo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navButtons">
          <button className="navButton">Categoría 1</button>
          <button className="navButton">Categoría 3</button>
          <button className="navButton">Categoría 4</button>
        </div>

        <div>
          <CartWidget/>
        </div>
      </div>

      <div className={menuClass}>
        <div className="navMenuButtonsContainer">
          <button className="navButton">Categoría 1</button>
          <button className="navButton">Categoría 3</button>
          <button className="navButton">Categoría 4</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
