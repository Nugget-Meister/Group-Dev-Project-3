import React, {useState} from 'react';

const ImageResults = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    fetch('')
        .then(response => response.json())
        .then(data => {
            setImages(data.objectIDs);
            setLoading(false);
        })
        .catch(error => console.error('Error:', error));
        
        return (
            <div>
                {/* {loading ? (
                    <div>Loading...</div>
                )  :   (
                    <div>
                        <h1> Image Results</h1>
                    <div>
                    <ul>
                    </ul>
                            {images.map(objectID => (
                                <li key={objectID}>
                                    <img src={`https://metmuseum.github.io/object/${objectID}/images/primary.jpg`} alt={`Object ${objectID}`} />
                            
                    </li>
                </div>
      )}
    </div> */}
    </div>
  );
};