import React, {useState, useEffect, useReducer} from 'react';
import './ImageResult.css'
import {Link} from 'react-router-dom'


const URL = import.meta.env.VITE_API_URL;

// ObjectIds is a prop for this component 
// Request made per object 
const ImageResult = ({
        objectID,
        URL,
        handleFavorite,
        name
    }) => {


    return (

                    <div className='ImageResult'>
                        <h3>{name}</h3>
                        <Link to={`/imagedetails/${objectID}`}>
                            <img 
                            src={URL}
                            alt={`Object ${objectID}`}
                            />
                        </Link><br/>
                        <button onClick={() => {handleFavorite()}}>Add to Favorites</button>
                    </div>

    );
};
// 
export default ImageResult;
