import React, {useState, useEffect} from 'react';


const URL = import.meta.env.IMAGE_API_URL;


const ImageResult = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // console.log(data.objectIDs)
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setImages(data.objectIDs);
                setLoading(false);
        })
            .catch(error => console.error('Error:',error ));
    }, []);

    return (
        <div className='ImageResult'>
             {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <h1>Image Result</h1>
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
