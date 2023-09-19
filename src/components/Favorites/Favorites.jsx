import React from 'react';

const Favorites = (props) => {

    return (
        <div className="App">
            <h1>Favorites</h1>
            {/* <ul>
                {props.favorites.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.src} alt={`Photo ${photo.id}`} />
                        <button onClick={() => handleFavorite(photo.id)}>
                            {photo.favorite ? 'Remove Favorite' : 'Add Favorite'}
                        </button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default Favorites;
