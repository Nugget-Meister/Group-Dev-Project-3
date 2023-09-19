import React, { useEffect, useState } from 'react';
import ImageResult from '../common/ImageResult';
import {Link} from 'react-router-dom'
import { getObjects } from '../common/apicalls';
import dummyinfo from '../common/dummyinfo';

const Results = ({
        searchResult, 
        savedFavorites, 
        updateSavedFavorites,
        handleFavorite
    }) => {

    const [selected, updateSelected] = useState([...dummyinfo.dummy])
    const [loopNum, updateloopNum] = useState(0)
    const [errorMessage, updateError] = useState(<div>Searching</div>)

        console.log(dummyinfo)

    setTimeout(()=> {
        if(selected.length < 1) {
            updateError(
                <div className='error'>
                    <h1>An error has occured.</h1>
                    <h2>Please return <Link to="/">home</Link> and try again.</h2>
                </div>
                )

        }
    }, 3000)    

    const changePage = () => {
        updateSelected([])
    }

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
        <div className='Results'>
            {selected.length != 0 ? 
            <div className='resultList'>
                {   selected.map((object) => {
                return (
                    <>
                        <ImageResult 
                            objectID={object.objectID}
                            name={object.title}
                            URL={object.primaryImage || "/src/assets/noImg.jpeg"}
                            savedFavorites={savedFavorites}
                            updateSavedFavorites={updateSavedFavorites}
                            handleFavorite={handleFavorite}
                        />
                    </>
                )
            })}
            <button onClick={()=> {
                updateSelected([])
                if(loopNum >= searchResult.length){
                    updateloopNum(0)
                    updateError(<div>Searching</div>)
                }
                }}>Next Set</button>
            </div>
            : errorMessage}
        </div>
    );
}

export default Results;
