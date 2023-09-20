import React, {useState, useEffect, useReducer} from 'react';
import { useLocation } from 'react-router';


const ImageDetails = () => {

    const location = useLocation()
    const data = location.state
    console.log(data)
    
    return (
        <div className='ImageDetails'>
            {/* <h2>{image.title}</h2> */}
            {/* <img
                src={URL}
                alt={`Object ${objectID}`}
            /> */}
            <h2>Categories</h2>
            
            {/* <p>{image.description}</p> */}


        </div>
    );
}

export default ImageDetails;
