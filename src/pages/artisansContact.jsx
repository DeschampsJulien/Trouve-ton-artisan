import { useParams } from 'react-router-dom';
import ArtisansDatas from '../datas/datas.json';

import ArtisanCardContact from "../components/artisanCardContact/artisanCardContact";
import Form from "../components/form/form";

function ArtisansContact () {

    // USEPARAMS HOOK PERMET D'ACCEDER AUX PARAMETRES ET VALEUR DU FICHIER DATAS.JSON
    const { artisanId } = useParams();

    // FILTRE ET SELECTIONNE LES ARTISANS EN FONCTION DE ID
    const selectedArtisans = ArtisansDatas.filter(artisan => artisan.id === artisanId);
  
    return (  
        <main>
            <div className="decoration-main">
                <div className="decoration-main-left"></div>
                <div className="decoration-main-center"></div>
                <div className="decoration-main-right"></div>
            </div>
            <section className="container">
                <h2 className="text-center m-5">Contactez l'artisan</h2>
                <div className="row">
                    {/* RECUPERATION AVEC LE FILTRE DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
                    {selectedArtisans.map((artisan)=>(
                        <ArtisanCardContact
                            // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARDCONTACT
                            key={artisan.id}
                            name={artisan.name}
                            specialty={artisan.specialty}
                            location={artisan.location}
                            note={artisan.note}
                            email={artisan.email}
                            website={artisan.website}
                            about={artisan.about}
                        />
                    ))}
                    <Form />
                </div>
            </section>
        </main>
    );
} 

export default ArtisansContact;