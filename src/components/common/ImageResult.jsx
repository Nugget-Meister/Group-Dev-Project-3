import React, {useState, useEffect, useReducer} from 'react';
import './ImageResult.css'
import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ImageResult = ({
        objectID,
        URL,
        handleFavorite,
        savedFavorites,
        name,
        object
    }) => {

    
    return (
        <Card key={objectID}>
            {/* <Link to={{pathname:`/imagedetails/${objectID}`, state:{object}}} > */}
                <Card.Img 
                    variant='top' 
                    src={URL || '/src/assets/noImg.jpeg'}
                    alt={`Object ${objectID}`}
                    onError={(e) => console.log(e.target.src="/src/assets/noImg.jpeg")}
                />
            {/* </Link> */}
            <Card.Body>
                <Card.Text>{name}</Card.Text>
                <Button onClick={() => {handleFavorite(object)}}>{savedFavorites[objectID]? `Remove Favorite`: `Add Favorite`}</Button>
            </Card.Body>
        </Card>

                    // <div className='ImageResult card' style={{width: '18rem'}}>
                    //     <h3>{name}</h3>
                    //     <Link to={`/imagedetails/${objectID}`}>
                    //         <img 
                    //         src={URL || '/src/assets/noImg.jpeg'}
                    //         alt={`Object ${objectID}`}
                    //         />
                    //     </Link><br/>
                    //     <button onClick={() => {handleFavorite(objectID)}}>Add to Favorites</button>
                    // </div>

    );
};
// 
export default ImageResult;
