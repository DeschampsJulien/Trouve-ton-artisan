import "./step.scss";

// PROPS RECUPERE LES VALEURS NUMBER ET INDICATION DECLAREES DANS LA BALISE STEP
function Step (props) {

    return (
        <div className="step d-flex flex-row list-group-item">
            <p className="m-2">{props.number}</p>
            <p className="m-2">{props.indication}</p>
        </div> 
    );
}

export default Step;