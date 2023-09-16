import React, {useState} from 'react';

const ImageResult = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    fetch(${URL})
        .then(response => response.json())
        .then(data => {
            setImages(data.objectID);
            setLoading(false);
        })
        .catch(error => console.error('Error:',error ));
    return (
        <div className='ImageResult'>
             {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <h1>Image Results</h1>
                  <ul>
                    {images.map(objectID => (
                      <li key={objectID}>
                        <img
                          src={`https://metmuseum.github.io/object/${objectID}/images/primary.jpg`}
                          alt={`Object ${objectID}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
        </div>
    );
};

export default ImageResult;
