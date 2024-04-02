// import Step from "../components/step";

const Step = (props) => {

    return (
        <div className="d-flex flex-row list-group-item">
            <p className="m-2">{props.number}</p>
            <p className="m-2">{props.indication}</p>
        </div> 
    );
}

function Home() {
    return (
        <main>
            <section className="d-flex flex-column mx-2">
                <h1 className="text-center my-5">Comment trouver mon artisan ?</h1>
                <div class="list-group list-group-flush">
                    {/* EXEMPLE SIMPLE DE DECLARATION DE PROPS POUR COMPONENT/CONST STEP */}
                    <Step number="1" indication="Choisir une catégorie d'artisanat dans le menu."/>
                    <Step number="2" indication="Choisir un artisan."/>
                    <Step number="3" indication="Le contacter via le formulaire."/>
                    <Step number="4" indication="Une réponse sera apportée sous 48h."/>
                </div>
            </section>

            <section>
                <div class="card w-50 text-center mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </section>
        </main>
    );
  }
  
  export default Home;