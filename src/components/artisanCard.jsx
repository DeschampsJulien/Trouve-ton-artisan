import { Link } from 'react-router-dom';

// PROPS RECUPERE LES VALEURS NAME, SPECIALTY, EXT.. DECLAREES DANS LA BALISE ARTISANCARD
function ArtisanCard (props) { 
    return (  
        <div className="col-lg-4 col-md-6">
            <div className="card text-center m-3">
                <div className="card-body">
                    {/* RECUPERATION D'UNE IMAGE */}
                    {/* <div className="my-4 mx-2">{<img className="img-fluid" src={user.avatar_url} alt="Avatar John Doe" />}</div> */}
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.specialty}</p>
                    <p className="card-text">Note: {props.note}/5</p>
                    <p className="card-text">{props.location}</p>
                    <Link to={`/contact/${props.id}`} class="btn btn-primary">Contact</Link>

                    {/* <Link to={`/details/${props.id}`} className="btn btn-outline-primary">
                                    {props.btn}
                                </Link>
                            
                                <Button
                                    linkPage={`/entreprise/${props.nameEntreprise}`}
                                    type="link"
                                    buttonName="En savoir plus"
                                    color="red"
                                />

                                <Link
                                    to={`/artisan/${artisan.id}`}
                                    className="text-dark text-decoration-none"
                                ></Link> */}
                </div>
            </div>      
        </div>
    );
} 

export default ArtisanCard;