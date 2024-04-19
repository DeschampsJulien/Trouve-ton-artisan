import "./rating.scss";

// RECUPERATION DES VALEURS DE STARS ET DE NOTE DECLAREES DANS LA BALISE RATING
function Rating ({stars}) { 

    const fullStars = Array(5).fill(<i className="rating fa-solid fa-star"></i>);
    const emptyStars = Array(5).fill(<i className="fa-regular fa-star"></i>);

    const parsedNote = parseFloat(stars);

    const fullStarsCount = fullStars.slice(5 - Math.round(parsedNote));
    const emptyStarsCount = emptyStars.slice(Math.round(parsedNote));
    
    return (
        <div className="m-3">
            {fullStarsCount.map((fullStarsCount, index) => (
                <span key={index}>{fullStarsCount}</span>
            ))}
            {emptyStarsCount.map((emptyStarsCount, index) => (
                <span key={index}>{emptyStarsCount}</span>
            ))}
        </div>
    );
}

export default Rating;