import React, { useState } from "react";
import "./burgerMenu.scss";

function BurgerMenu () {
       
      const [isOpen, setIsOpen] = useState(false);

      function toggleMenu () {
      setIsOpen(!isOpen);
      };

      return (
      <span className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu} tabIndex={0}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
      </span>
      );
};

export default BurgerMenu;