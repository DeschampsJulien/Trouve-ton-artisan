import { useParams } from 'react-router-dom';
import ArtisansDatas from '../datas/datas.json';
import ArtisanCard from "../components/artisanCard/artisanCard";

function ArtisansCategory () {
  
  // USEPARAMS HOOK PERMET D'ACCEDER AUX PARAMETRES ET VALEUR DU FICHIER DATAS.JSON 
  const { artisansCategory } = useParams();

  // FILTRE ET SELECTIONNE LES ARTISANS EN FONCTION DE LEUR CATEGORIE
  const selectedArtisans = ArtisansDatas.filter(artisan => artisan.category === artisansCategory);

  return (
    <main>
      <div className="decoration-main">
        <div className="decoration-main-left"></div>
        <div className="decoration-main-center"></div>
        <div className="decoration-main-right"></div>
      </div>
      <section className="container">
        <h2 className="text-center m-5">Les artisans de la région dans la catégorie {artisansCategory}</h2>
        <div className="row">
          {/* RECUPERATION AVEC LE FILTRE DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
          {selectedArtisans.map((artisan)=>(
            <ArtisanCard
              // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARD
              key={artisan.id}
              id={artisan.id}
              name={artisan.name}
              specialty={artisan.specialty}
              location={artisan.location}
              note={artisan.note}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ArtisansCategory;