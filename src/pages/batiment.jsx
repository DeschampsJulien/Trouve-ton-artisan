import ArtisanCard from "../components/artisanCard";
import ArtisansDatas from "../datas/datas.json";

function Batiment() {

    // FILTRE ET SELECTIONNE LES ARTISANS POUR LA VALEUR CATEGORY EQUIVALENTE A BATIMENT
    const batimentArtisans = ArtisansDatas.filter(artisan => artisan.category === "Bâtiment");

    return (
        <main>
            <section className="container">
                <h2 className="text-center m-3">Liste des artisans du batiment</h2>
                <div className="row">
                    {/* RECUPERATION AVEC LE FILTRE DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
                    {batimentArtisans.map((artisan)=>(
                        <ArtisanCard
                            // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARD
                            name={artisan.name}
                            specialty={artisan.specialty}
                            note={artisan.note}
                            location={artisan.location}
                        />
                    ))}

                </div>
            </section>
        </main>
    );
}
  
export default Batiment;