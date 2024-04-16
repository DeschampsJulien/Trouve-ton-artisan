import { Link } from "react-router-dom";
import Rating from "./rating"

// PROPS RECUPERE LES VALEURS NAME, SPECIALTY, EXT.. DECLAREES DANS LA BALISE ARTISANCARD
function ArtisanCard (props) { 

    return (  
        <div className="col-lg-4 col-md-6">
            <div className="card text-center m-3">
                <div className="card-body">
                    <h3 className="card-title rounded p-3">{props.name}</h3>
                    <p className="card-text">{props.specialty}</p>
                    <p className="card-text">{props.location}</p>
                    <Rating 
                        stars={props.note}
                        note={props.note}
                    />
                    <Link to={`/contact/${props.id}`} className="btn btn-primary">Contact</Link>
                </div>
            </div>      
        </div>
    );
} 

export default ArtisanCard;