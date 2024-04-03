// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Link } from 'react-router-dom';

function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" href="#"><img src="logo.png" width="200" alt="logo du site trouve ton artisan région Auvergne Rhône-Alpes" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link to={""} className="nav-link active" aria-current="page" href="#">Accueil</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to={""} className="nav-link">Bâtiment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={""} className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={""} className="nav-link">Fabrication</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={""} className="nav-link">Alimentation</Link>
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