import React, { useState } from "react";
import "./burgerMenu.scss";

function BurgerMenu () {
      const [isOpen, setIsOpen] = useState(false);

      function toggleMenu () {
      setIsOpen(!isOpen);
      };

      return (
      <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu} tabIndex={0}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
      </div>
      );
};

export default BurgerMenu;