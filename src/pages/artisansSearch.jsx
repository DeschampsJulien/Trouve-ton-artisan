import ArtisansDatas from '../datas/datas.json';
import ArtisanCard from "../components/artisanCard/artisanCard";

function searchResult ({ searchValue }) {
    
    // FILTRE DE RECHERCHE EN FONCTION DES TROIS OPTIONS "NAME, SPECIALTY, LOCATION"
    const results = ArtisansDatas.filter(artisan => artisan.name.toLowerCase().includes(searchValue.toLowerCase())
        || artisan.specialty.toLowerCase().includes(searchValue.toLowerCase())
        || artisan.location.toLowerCase().includes(searchValue.toLowerCase()))

    let content

    if (results.length > 0) {
        const artisans = results.map((artisan) => (
            <ArtisanCard
                key={artisan.id}
                id={artisan.id}
                name={artisan.name}
                specialty={artisan.specialty}
                location={artisan.location}
                note={artisan.note}
            />
        ));
                
        content = (
            <main>
                <div className="decoration-main">
                    <div className="decoration-main-left"></div>
                    <div className="decoration-main-center"></div>
                    <div className="decoration-main-right"></div>
                </div>
                <section className="container">
                    <h2 className="text-center m-5">Liste de vôtre recherche</h2>
                    <div className="row">
                        {artisans}
                    </div>
                </section>
            </main>
        );
    } 
    
    else {
        content = (
            <main>
                <div className="decoration-main">
                    <div className="decoration-main-left"></div>
                    <div className="decoration-main-center"></div>
                    <div className="decoration-main-right"></div>
                </div>
                <section className="container">
                <h2 className="text-center m-5">Aucun résultat trouvé pour "{searchValue}"</h2>
                </section>
            </main>
        );
    }

    return (
        <main>
            {content}
        </main>
    );
}

export default searchResult;