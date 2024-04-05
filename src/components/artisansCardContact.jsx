// PROPS RECUPERE LES VALEURS NAME, SPECIALTY, EXT.. DECLAREES DANS LA BALISE ARTISANCARDCONTACT
function ArtisanCardContact (props) { 
    
    return (  
        <section className="container" key={props.id}>
            <h2 className="text-center m-3">Contact</h2>
            <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center m-3">
                            <div className="card-body">
                                <h3 className="card-title">{props.name}</h3>
                                <p className="card-text">{props.specialty}</p>
                                <p className="card-text">Note: {props.note}/5</p>
                                <p className="card-text">{props.location}</p>
                                
                            
                                


                            </div>
                        </div>      
                    </div>
                
            </div>
        </section>
    );
} 

export default ArtisanCardContact;