import Rating from "./rating"

// PROPS RECUPERE LES VALEURS NAME, SPECIALTY, EXT.. DECLAREES DANS LA BALISE ARTISANCARD
function ArtisanCardContact (props) {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="card text-center m-3">
                <div className="card-body">
                    {/* RECUPERATION D'UNE IMAGE */}
                    {/* <div className="my-4 mx-2">{<img className="img-fluid" src={user.avatar_url} alt="Avatar John Doe" />}</div> */}
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.specialty}</p>
                    <p className="card-text">{props.location}</p>
                    <Rating 
                        stars={props.note}
                        note={props.note}
                    />
                    <p className="card-text">{props.email}</p>
                    <p className="card-text"><a href={props.website} target="_blank" rel="noreferrer">{props.website}</a></p>
                </div>
            </div>
            <div className="card text-center m-3">
                <div className="card-body">
                    {/* RECUPERATION D'UNE IMAGE */}
                    {/* <div className="my-4 mx-2">{<img className="img-fluid" src={user.avatar_url} alt="Avatar John Doe" />}</div> */}
                    <h3>A propos</h3>
                    <p className="card-text">{props.about}</p>
                </div>
            </div>
        </div>
    )
}

export default ArtisanCardContact;