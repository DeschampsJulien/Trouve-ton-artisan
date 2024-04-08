// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <div className="container text-center text-md-start pt-5">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
                        <p>
                            <Link to="#!" className="text-reset">Mentions Légales</Link>
                        </p>
                        <p>
                            <Link to="#!" className="text-reset">Données personnelles</Link>
                        </p>
                        <p>
                            <Link to="#!" className="text-reset">Accesibilité</Link>
                        </p>
                        <p>
                            <Link to="#!" className="text-reset">Cookies</Link>
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Catégories</h6>
                        <p>
                            <Link to="#!" className="text-reset">Bâtiment</Link>
                        </p>
                        <p>
                            <Link to="#!" className="text-reset">Services</Link>
                        </p>
                        <p>
                            <Link to="#!" className="text-reset">Fabrication</Link>
                        </p>
                        <p>
                            <Link to="#!" className="text-reset">Alimentation</Link>
                        </p>
                    </div>
                    <div className="col-lg-6 col-xl-6 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>
                            <i className="fas fa-home me-3"></i> 101 cours Charlemagne CS 20033 69269 LYON CEDEX 02
                        </p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>info@example.com
                        </p>
                        <p>
                            <i className="fas fa-phone me-3"></i>+33 (0)4 26 73 40 00
                        </p>
                        <p>
                            <i className="fas fa-print me-3"></i>+33 (0)4 12 17 21 11
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-4">
                <p>© 2024 Copyright: 
                    <a className="m-2" href="https://www.github.com/DeschampsJulien" target="_blank" rel="noopener noreferrer">
                        github DeschampsJulien
                    </a>
                </p>
            </div>
        </footer>
    );
}
  
export default Footer;