import ArtisansDatas from '../datas/datas.json';

function Test () {
  
    return (  
        <div className="container">
            {ArtisansDatas.map((artisan)=>(
            <p>{artisan.name}</p>
            ))}
        </div>
    );
} 

export default Test;