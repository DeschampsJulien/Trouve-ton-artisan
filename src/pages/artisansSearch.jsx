import ArtisansDatas from '../datas/datas.json';
import ArtisanCard from "../components/artisanCard"

function searchResult ({ searchValue }) {
    
    const results = ArtisansDatas.filter(artisan => artisan.specialty.toLowerCase().includes(searchValue.toLowerCase())
        || artisan.name.toLowerCase().includes(searchValue.toLowerCase())
        || artisan.location.toLowerCase().includes(searchValue.toLowerCase()))

    let content

    if (results.length > 0) {
        const artisans = results.map((artisan) => (
            <ArtisanCard
                id={artisan.id}
                name={artisan.name}
                specialty={artisan.specialty}
                location={artisan.location}
                note={artisan.note}
            />
        ))

        content = (
            <div>
                <h1>Le résultat de votre recherche</h1>
                <div className="sep1"></div>
                <div className="row list-card">{artisans}</div>
            </div>
        )
    } else {
        content = <h2>Aucun résultat trouvé pour "{searchValue}"</h2>;
    }

    return <section className="page">{content}</section>;
}

export default searchResult;