// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/pictures/logo.png";
import BurgerMenu from "../../components/burgerMenu/burgerMenu";

import "./header.scss";



function Header({ onSearch }) {

    // USESTATE STOCK LA VALEUR INITIALE DE ACTIVELINK
    const [activeLink, setActiveLink] = useState("/");
    // DECLARATION DE LA NOUVELLE VALEUR AU CLICK
    function handleClick (path) {
        setActiveLink(path);
    };

    // USESTATE STOCK LA VALEUR INITIALE DE SEARCHVALUE
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    function handleSearchChange (e) {
        setSearchValue(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        onSearch(searchValue);
        navigate("/results");
    }
    

    return (
        <header className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" href="#">
                    <img src={Logo} width="200" alt="logo du site trouve ton artisan région Auvergne Rhône-Alpes" className="shadow-drop-center" tabIndex={0} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <BurgerMenu />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mx-3 mb-2 mb-lg-0">
                        {/* <li className={`nav-item ${activeLink === "/category/Bâtiment" ? "active" : ""}`}>
                            <Link to="/category/Bâtiment" className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Bâtiment")}>Bâtiment</Link>
                        </li> */}
                        <li id={activeLink === "/category/Bâtiment"} className="nav-item">
                            <Link to="/category/Bâtiment" className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Bâtiment")}>Bâtiment</Link>
                        </li>
                        <li id={activeLink === "/category/Services"} className="nav-item">
                            <Link to={"/category/Services"} className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Services")}>Services</Link>
                        </li>
                        <li id={activeLink === "/category/Fabrication"} className="nav-item">
                            <Link to={"/category/Fabrication"} className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Fabrication")}>Fabrication</Link>
                        </li>
                        <li id={activeLink === "/category/Alimentation"} className="nav-item">
                            <Link to={"/category/Alimentation"} className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Alimentation")}>Alimentation</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control border border-dark me-2" type="search" placeholder="Recherche"
                            aria-label="Search" onChange={handleSearchChange}></input>
                        <button className="btn btn-primary" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
        </header>
    );
}
  
export default Header;