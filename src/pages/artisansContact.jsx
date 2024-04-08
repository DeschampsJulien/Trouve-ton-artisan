import { useParams } from 'react-router-dom';
import ArtisansDatas from '../datas/datas.json';
import ArtisanCardContact from "../components/artisanCardContact";


function ArtisansContact () {

    // USEPARAMS HOOK PERMET D'ACCEDER AUX PARAMETRES DE URL
    const { artisanId } = useParams();
    // FILTRE ET SELECTIONNE LES ARTISANS EN FONCTION DE ID
    const selectedArtisans = ArtisansDatas.filter(artisan => artisan.id === artisanId);
  
    return (  
        <section className="container">
            <h2 className="text-center m-3">Contact</h2>
            <div className="row">
                {/* RECUPERATION AVEC LE FILTRE DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
                {selectedArtisans.map((artisan)=>(
                    <ArtisanCardContact
                        // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARDCONTACT
                        id={artisan.id}
                        name={artisan.name}
                        specialty={artisan.specialty}
                        location={artisan.location}
                        note={artisan.note}
                        email={artisan.email}
                        website={artisan.website}
                        about={artisan.about}
                    />
                ))}
            </div>
        </section>
    );
} 

export default ArtisansContact;