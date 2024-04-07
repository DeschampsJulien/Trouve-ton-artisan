// PROPS RECUPERE LES VALEURS NAME, SPECIALTY, EXT.. DECLAREES DANS LA BALISE ARTISANCARD
function ArtisanCardContact (props) {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="card text-center m-3">
                <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                    <div className='text-center'>
                        {/* <Rating note={props.note} /> */}
                    </div>
                    <p className="card-text">{props.specialty}</p>
                    <p className="card-text">Note: {props.note}/5</p>
                    <p className="card-text">{props.location}</p>
                    <p className="card-text">{props.email}</p>
                    <p className="card-text"><a href={props.website} target="_blank" rel="noreferrer">{props.website}</a></p>
                </div>
            </div>
        </div>
    )
}

export default ArtisanCardContact;