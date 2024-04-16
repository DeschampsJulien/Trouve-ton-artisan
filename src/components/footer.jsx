// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {

    // USESTATE STOCK LA VALEUR INITIALE DE ACTIVELINK
    const [activeLink, setActiveLink] = useState("/");
    // DECLARATION DE LA NOUVELLE VALEUR AU CLICK
    function handleClick (path) {
        setActiveLink(path);
    };

    return (
        <footer className="text-center text-lg-start text-muted mt-5">
            <div className="decoration-footer">
                <div className="decoration-footer-left"></div>
                <div className="decoration-footer-center"></div>
                <div className="decoration-footer-right"></div>
            </div>
            <div className="container text-center text-md-start pt-5">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h4 className="text-uppercase my-4">Menu</h4>
                        <div className="my-3">
                            <Link to={"/mentions"} className="nav-link">Mentions légales</Link>
                        </div>
                        <div className="my-3">
                            <Link to={"/donnees"} className="nav-link">Données personnelles</Link>
                        </div>
                        <div className="my-3">
                            <Link to={"/accesibilite"} className="nav-link">Accesibilité</Link>
                        </div>
                        <div className="my-3">
                            <Link to={"/cookies"} className="nav-link">Cookies</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h4 className="text-uppercase my-4">Catégories</h4>
                        <div id={activeLink === "/category/Bâtiment"} className="my-3">
                            <Link to="/category/Bâtiment" className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Bâtiment")}>Bâtiment</Link>
                        </div>
                        <div id={activeLink === "/category/Services"} className="my-3">
                            <Link to={"/category/Services"} className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Services")}>Services</Link>
                        </div>
                        <div id={activeLink === "/category/Fabrication"} className="my-3">
                            <Link to={"/category/Fabrication"} className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Fabrication")}>Fabrication</Link>
                        </div>
                        <div id={activeLink === "/category/Alimentation"} className="my-3">
                            <Link to={"/category/Alimentation"} className="nav-link" aria-current="page" onClick={() => handleClick ("/category/Alimentation")}>Alimentation</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 mx-auto mb-4">
                        <h4 className="text-uppercase my-4">Contact</h4>
                            <p className="my-3">
                                <i className="fas fa-home me-3"></i>101 cours Charlemagne CS 20033 69269 LYON CEDEX 02
                            </p>
                            <p className="my-3">
                                <i className="fas fa-envelope me-3"></i>info@exemple.com
                            </p>
                            <p className="my-3">
                                <i className="fas fa-phone me-3"></i>+33 (0)4 26 73 40 00
                            </p>
                            <p className="my-3">
                                <i className="fas fa-print me-3"></i>+33 (0)4 12 17 21 11
                            </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-4">
                <p>© 2024 Copyright: 
                    <a className="nav-link m-2" href="https://www.github.com/DeschampsJulien" target="_blank" rel="noopener noreferrer">
                        github DeschampsJulien
                    </a>
                </p>
            </div>
        </footer>
    );
}
  
export default Footer;