import Step from "../components/step";
import ArtisanCard from "../components/artisanCard";
import ArtisansDatas from "../datas/datas.json";
import ArtisansCategory from "./artisansCategory";


function Home() {

    // FILTRE ET SELECTIONNE LES ARTISANS POUR LA VALEUR "TOP" EQUIVALENTE A TRUE
    const topArtisans = ArtisansDatas.filter(artisan => artisan.top === true);
    
    return (
        <main>
            <section className="container">
                <h1 className="text-center m-3">Les artisans de la région Auvergne-Rhône-Alpes</h1>
                <h2 className="text-center m-3">Comment trouver mon artisan ?</h2>
                <div class="list-group list-group-flush">
                    {/* DECLARATION DES PROPS POUR COMPONENT STEP */}
                    <Step number="1" indication="Choisir une catégorie d'artisanat dans le menu."/>
                    <Step number="2" indication="Choisir un artisan."/>
                    <Step number="3" indication="Le contacter via le formulaire."/>
                    <Step number="4" indication="Une réponse sera apportée sous 48h."/>
                </div>
            </section>

            <section className="container">
                <h2 className="text-center m-3">Liste des Top artisans</h2>
                <div className="row">
                    {/* RECUPERATION AVEC LE FILTRE "topArtisans" DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
                    {topArtisans.map((artisan)=>(
                        <ArtisanCard
                            // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARD
                            name={artisan.name}
                            specialty={artisan.specialty}
                            note={artisan.note}
                            location={artisan.location}
                            // btn="En savoir plus"
                            // key={artisan.id}
                            id={artisan.id}
                        />
                    ))}
                </div>
            </section> 
            
            <ArtisansCategory />

        </main>
    );
  }
  
  export default Home;