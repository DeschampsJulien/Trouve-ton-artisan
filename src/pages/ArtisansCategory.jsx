import { useParams } from 'react-router-dom';
import ArtisansDatas from '../datas/datas.json';
import ArtisanCard from "../components/artisanCard";

const ArtisansCategory = () => {
  // USEPARAMS HOOK PERMET D'ACCEDER AUX PARAMETRES DE URL 
  const { artisansCategory } = useParams();
  // FILTRE ET SELECTIONNE LES ARTISANS EN FONCTION DE LEUR CATEGORIE
  const selectedArtisans = ArtisansDatas.filter(artisan => artisan.category === artisansCategory);

  return (
    <section className="container">
        <h2 className="text-center m-3">Les artisans de la région dans la catégorie {artisansCategory}</h2>
        <div className="row">
            {/* RECUPERATION AVEC LE FILTRE DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
            {selectedArtisans.map((artisan)=>(
                <ArtisanCard
                    // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARD
                    id={artisan.id}
                    name={artisan.name}
                    specialty={artisan.specialty}
                    note={artisan.note}
                    location={artisan.location}
                    // btn="En savoir plus"
                    // key={artisan.id}
                />
            ))}
        </div>
    </section>

  )
}

export default ArtisansCategory;