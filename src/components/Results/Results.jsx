import React, { useEffect, useState } from 'react';
import ImageResult from '../common/ImageResult';
import {Link} from 'react-router-dom'
import { getObjects } from '../common/apicalls';
import { dataSample } from '../common/chicagoMuseum/dummyResponse';

import '../Results/Results.css'

const Results = ({
        searchResult, 
        savedFavorites, 
        updateSavedFavorites,
        handleFavorite
    }) => {

    // const [selected, updateSelected] = useState([])
    const [loopNum, updateloopNum] = useState(0)
    const [errorMessage, updateError] = useState(<div>Searching</div>)

    searchResult = dataSample.slice(0,4)

useEffect(()=> {
    setTimeout(()=> {
        if(searchResult.length < 1) {
            updateError(
                <div className='error'>
                    <h1>An error has occured.</h1>
                    <h2>Please return <Link to="/">home</Link> and try again.</h2>
                </div>
                )
        }
    }, 3000)    
},[])
    

    // useEffect (() => {
    //     setTimeout(() => {
    //         if(searchResult.length > 0) {
    //             if(selected.length < 4 && loopNum <= searchResult.length){
    //                 console.log(`Searching: ${searchResult[loopNum]}. ${loopNum}/${searchResult.length}`,)
    //                 console.log(`${selected.length}/4 slots used`)
    //                 getObjects(searchResult[loopNum])
    //                 .then(result => {
    //                     // console.log(result, !!result.primaryImage)
    //                     if(!!result.primaryImage){
    //                         updateSelected([...selected, result])
    //                     } else {
    //                         console.log("Image not found, trying ",searchResult[loopNum])
    //                     }
    //                     updateloopNum(loopNum+1)
    //                 })
    //                 .catch(error =>{
    //                     console.log(error)
    //                     updateloopNum(loopNum+1)
    //                 })
    //             }
    //         }
    //     }, 1000)
    // } ,[loopNum])

    

    return (
        <div className='Results' key="results">
            {searchResult.length != 0 ? 
            <div className='resultList' key='resultList'>
                {
                    searchResult.map((object) => {
                        let imageURL = `https://www.artic.edu/iiif/2/${object.image_id}/full/843,/0/default.jpg`
                        console.log(imageURL)
                        return (
                            <ImageResult 
                                key={object.id}
                                objectID={object.id}
                                name={object.title}
                                URL={
                                    imageURL || 
                                    "/src/assets/noImg.jpeg"}
                                updateSavedFavorites={updateSavedFavorites}
                                savedFavorites={savedFavorites}
                                handleFavorite={handleFavorite}
                            />
                        )
                    })
                }
                
            </div>
            : errorMessage}
            {/* {selected.length != 0 ?
            <button onClick={()=> {
                updateSelected([])
                if(loopNum >= searchResult.length){
                    updateloopNum(0)
                    updateError(<div>Searching</div>)
                }
                }}>Next Set</button>
                 : ''} */}
        </div>
    );
}

export default Results;
