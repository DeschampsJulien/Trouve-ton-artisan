import { useParams } from 'react-router-dom';
import data from '../datas/datas.json';
import ArtisanCard from "../components/artisanCard";

const ArtisansCategory = () => {
  const { artisanCategory } = useParams()

  const selectedArtisans = data.filter(artisan => artisan.category === artisanCategory)

  const artisans = selectedArtisans.map(artisan => {
    return <ArtisanCard
    //   name={artisan.name}
    //   specialty={artisan.specialty}
    //   location={artisan.location}
    //   btn="En savoir plus"
    //   key={artisan.id}
    //   id={artisan.id}
    //   note={artisan.note}
        name={artisan.name}
        specialty={artisan.specialty}
        note={artisan.note}
        location={artisan.location}
        />

      
  })
  return (
    <section className="page">
      <h1>Les artisans de la région dans la catégorie {artisanCategory}</h1>
      <div className="sep1"></div>
      <div className='row list-card'>
          {artisans}
      </div>
    </section>
  )
}

export default ArtisansCategory;