import React, {useState, useEffect, useReducer} from 'react';
import './ImageResult.css'
import {Link} from 'react-router-dom'


const URL = import.meta.env.VITE_API_URL;

// ObjectIds is a prop for this component 
// Request made per object 
const ImageResult = ({objectID,URL,handleFavorite}) => {
    // //*const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState(true);

    // // console.log(data.objectIDs)
    // console.log(URL)
    // useEffect(() => {
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then(data => {
    //     const firstTen = data.objectIDs.splice(0,10)
    //             setImages(firstTen);
    //             setLoading(false);
    //     })
    //         .catch(error => console.error('Error:',error ));
    // }, []);

    return (
        // <div className='ImageResult'>
        //      //{loading ? (
        //         <div>Loading...</div>
        //       ) : (
        //         <div>
        //           <h1>Image Result</h1>
        //           <ul className='ImageResult--ul'>
        //             {images.map(objectID => (
                     <li key={objectID}>
                         <p> Image </p>
                         <Link to={`/imagedetails/${objectID}`}>
                         <img 
                         src={URL}
                          alt={`Object ${objectID}`}
                        />
                          </Link>
                          <button onClick={() => {handleFavorite()}}>Add to Favorites</button>
                      </li>
                  //   ))}
                  // </ul>
        //         </div>
        //       )}
        // </div>
    );
};
// 
export default ImageResult;
