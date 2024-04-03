import Step from "../components/step";
import ArtisanCard from "../components/artisanCard";
import ArtisansDatas from "../datas/datas.json";

// const Step = (props) => {

//     return (
//         <div className="d-flex flex-row list-group-item">
//             <p className="m-2">{props.number}</p>
//             <p className="m-2">{props.indication}</p>
//         </div> 
//     );
// }

function Home() {
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
                <h2 className="text-center m-3">Liste des artisans</h2>
                <div className="row">
                    {ArtisansDatas.map((artisan)=>(
                        <ArtisanCard
                            // DECLARATION DES PROPS POUR LE COMPONENT ARTISANTCARD
                            name={artisan.name}
                            specialty={artisan.specialty}
                            note={artisan.note}
                            location={artisan.location}
                            // btn="En savoir plus"
                            // key={artisan.id}
                            // id={artisan.id}
                        />
                    ))}
                </div>
            </section>

            
        </main>
    );
  }
  
  export default Home;