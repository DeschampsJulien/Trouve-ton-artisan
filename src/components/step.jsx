function Step (props) {

    return (
        <div className="d-flex flex-row list-group-item">
            <p className="m-2">{props.number}</p>
            <p className="m-2">{props.indication}</p>
        </div> 
    );
}

export default Step;