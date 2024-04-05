import { Link } from 'react-router-dom';
import ArtisansDatas from "../datas/datas.json";


function ArtisanCardTop () { 
    // FILTRE ET SELECTIONNE LES ARTISANS POUR LA VALEUR "TOP" EQUIVALENTE A TRUE
    const topArtisans = ArtisansDatas.filter(artisan => artisan.top === true);

    return (  
        <section className="container">
            <h2 className="text-center m-3">Liste des Top artisans</h2>
            <div className="row">
                {/* RECUPERATION AVEC LE FITRE "topArtisans" DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
                {topArtisans.map((artisan)=>(
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center m-3">
                            <div className="card-body">
                                <h3 className="card-title">{artisan.name}</h3>
                                <p className="card-text">{artisan.specialty}</p>
                                <p className="card-text">Note: {artisan.note}/5</p>
                                <p className="card-text">{artisan.location}</p>
                                <Link to="#" class="btn btn-primary">Contact</Link>
                            </div>
                        </div>      
                    </div>
                ))}
            </div>
        </section>
    );
} 

export default ArtisanCardTop;