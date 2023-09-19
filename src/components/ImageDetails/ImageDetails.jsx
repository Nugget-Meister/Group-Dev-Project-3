import React, {useState, useEffect, useReducer} from 'react';

const ImageDetails = (URL,objectID) => {
    return (
        <div className='ImageDetails'>
            <h2>{image.title}</h2>
            <img
                src={URL}
                alt={`Object ${objectID}`}
            />
            <h2>Categories</h2>
            
            <p>{image.description}</p>


        </div>
    );
}

export default ImageDetails;
