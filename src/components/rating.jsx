// RECUPERATION DES VALEURS DE STARS ET DE NOTE DECLAREES DANS LA BALISE RATING
function Rating ({stars, note}) { 

    const fullStars = Array(5).fill(<i className="fa-solid fa-star"></i>);
    const emptyStars = Array(5).fill(<i className="fa-regular fa-star"></i>);

    const parsedNote = parseFloat(stars);

    const fullStarsCount = fullStars.slice(5 - Math.round(parsedNote));
    const emptyStarsCount = emptyStars.slice(Math.round(parsedNote));
    
    return (
        <div className="m-3">
            {fullStarsCount.map((fullStarsCount) => (
                <span>{fullStarsCount}</span>
            ))}
            {emptyStarsCount.map((emptyStarsCount) => (
                <span>{emptyStarsCount}</span>
            ))}
            <p className="card-text">Note: {note}/5</p>
        </div>
    );
}

export default Rating;