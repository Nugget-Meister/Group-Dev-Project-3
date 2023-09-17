import React, { useState, useEffect } from "react";



const Favorites = (props) => {
    
    // function handleFavorite(id) {
    //     const newFavorites = favorites.map(item => {
    //       return item.id === id ? { ...item, favorite: !item.favorite } : item;
    //     });
    
    //     updateSavedFavorites(newFavorites);
    //   }

    return (
        <div className="App">
            <h1>Initial list</h1>
            <ul>
                {props.favorites.map((item, i) => (
                    <li key={i}>
                        {item.name}{" "}
                        <button
                            onClick={() => {
                                props.handleFavorite(item.id);
                            }}
                        >
                            {item.favorite === true ? "Remove" : "Add"}
                        </button>
                    </li>
                ))}
            </ul>

            <h1>Favorite list</h1>
            <ul>
                {props.savedFavorites.map(item =>
                    item.favorite === true ? <li key={item.id}>{item.name}</li> : null
                )}
            </ul>
        </div>
    );
};

export default Favorites;