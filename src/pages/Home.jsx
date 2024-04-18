import Step from "../components/step/step";
import ArtisanCard from "../components/artisanCard/artisanCard";
import ArtisansDatas from "../datas/datas.json";

// import ArtisanBoulanger from "../assets/pictures/artisan-boulanger.jpg";
// import ArtisanCharpentier from "../assets/pictures/artisan-charpentier.jpg";
// import ArtisanFleuriste from "../assets/pictures/artisan-fleuriste.jpg";
import homeDecoration from "../assets/pictures/homeDecoration.jpg"

function Home() {

    // FILTRE ET SELECTIONNE LES ARTISANS POUR LA VALEUR "TOP" EQUIVALENTE A TRUE
    const artisansTop = ArtisansDatas.filter(artisan => artisan.top === true);

    return (
        <main>
            <div className="decoration-main">
                <div className="decoration-main-left"></div>
                <div className="decoration-main-center"></div>
                <div className="decoration-main-right"></div>
            </div>
            <section className="container">
                <h1 className="text-center m-5">Les artisans de la région Auvergne-Rhône-Alpes</h1>

                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 m-2">
                            <img src={ArtisanBoulanger} width="220" alt="..." />
                        </div>
                        <div className="col-lg-4 col-md-6 m-2">
                            <img src={ArtisanCharpentier} width="220" alt="..." />
                        </div>
                        <div className="col-lg-4 col-md-none m-2">
                            <img src={ArtisanFleuriste} width="220" alt="..." />
                        </div>
                    </div>
                    </div> */}

                <h2 className="text-center m-5">Comment trouver mon artisan ?</h2>
                <div className="row">
                    <div className="list-group list-group-flush">
                        {/* DECLARATION DES PROPS POUR COMPONENT STEP */}
                        <Step number="1" indication="Choisir une catégorie d'artisanat dans le menu."/>
                        <Step number="2" indication="Choisir un artisan."/>
                        <Step number="3" indication="Le contacter via le formulaire de contact."/>
                        <Step number="4" indication="Une réponse sera apportée sous 48h."/>
                    </div>
                </div>
                <div className="my-5">
                        <img src={homeDecoration} className="img-fluid rounded" alt="..."  />
                </div>
            </section>

            <section className="container">
                <h2 className="text-center m-5">Les trois artisans du mois</h2>
                <div className="row">
                    {/* RECUPERATION AVEC LE FILTRE "artisans" DE LA LISTE DES ARTISANS FICHIER DATAS.JSON */}
                    {artisansTop.map((artisan)=>(
                        <ArtisanCard
                            // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARD
                            id={artisan.id}
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
  
export default Home;