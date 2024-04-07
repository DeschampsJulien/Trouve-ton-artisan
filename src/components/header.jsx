// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Link } from 'react-router-dom';
import { useState } from "react"

import Logo from "../assets/pictures/logo.png";

function Header() {

    // USESTATE STOCK LA VALEUR ETAT DE ACTIVELINK
    const [activeLink, setActiveLink] = useState('/')
    // 
    const clickLink = (path) => {
        setActiveLink(path);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" href="#">
                    {/* tabIndex est un attribut global qui permet à un élément HTML de recevoir le focus. */}
                    <img src={Logo} width="200" alt="logo du site trouve ton artisan région Auvergne Rhône-Alpes" tabIndex="0" className="App-header-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link to="/batiment" className="nav-link">Bâtiment</Link>
                        </li> */}
                        <li className={`nav-item ${activeLink === "/category/Bâtiment" ? "active" : ""}`}>
                            <Link to="/category/Bâtiment" className="nav-link" aria-current="page" onClick={() => clickLink ('/category/Bâtiment')}>Bâtiment</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link to={""} className="nav-link">Services</Link>
                        </li> */}
                        <li className={`nav-item ${activeLink === '/category/Services' ? 'active' : ''}`}>
                            <Link to={"/category/Services"} className="nav-link" aria-current="page" onClick={() => clickLink ('/category/Services')}>Services</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link to={""} className="nav-link">Fabrication</Link>
                        </li> */}
                        <li className={`nav-item ${activeLink === '/category/Fabrication' ? 'active' : ''}`}>
                            <Link to={"/category/Fabrication"} className="nav-link" aria-current="page" onClick={() => clickLink ('/category/Fabrication')}>Fabrication</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link to={""} className="nav-link">Alimentation</Link>
                        </li> */}
                        <li className={`nav-item ${activeLink === '/category/Alimentation' ? 'active' : ''}`}>
                            <Link to={"/category/Alimentation"} className="nav-link" aria-current="page" onClick={() => clickLink ('/category/Alimentation')}>Alimentation</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
  
  export default Header;