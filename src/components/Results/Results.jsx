import React, { useEffect, useState } from 'react';
import ImageResult from '../common/ImageResult';
import {Link} from 'react-router-dom'
import { getObjects } from '../common/apicalls';
import { useParams } from 'react-router';

const Results = ({
        searchResult, 
        savedFavorites, 
        updateSavedFavorites,
        cachedData,
        updateCachedData
    }) => {

    const [page, updatePage] = useState(1)
    const [selected, updateSelected] = useState([])
    const [loopNum, updateloopNum] = useState(0)
    const [errorMessage, updateError] = useState(<div>Bonk</div>)
    // const params = useParams()


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

    useEffect (() => {
        setTimeout(() => {
            if(searchResult.length > 0) {
                if(selected.length < 4 && loopNum <= searchResult.length){
                    console.log(`Searching: ${searchResult[loopNum]}. ${loopNum}/${searchResult.length}`,)
                    console.log(`${selected.length}/4 slots used`)
                    getObjects(searchResult[loopNum])
                    .then(result => {
                        console.log(result, !!result.primaryImage)
                        if(!!result.primaryImage){
                            updateSelected([...selected, result], "Image found")
                        } else {
                            console.log("Image not found, trying ",searchResult[loopNum])
                        }
                        updateloopNum(loopNum+1)
                    })
                    .catch(error =>{
                        console.log(error)
                        updateloopNum(loopNum+1)
                    })
                }
            }
            

        }, 1000)
    } ,[selected])


    return (
        <div className='Results'>
            {selected.length != 0 ? 
            <>
                {   selected.map((object) => {
                return (
                    <>
                        <h1>{object.objectID}</h1>
                        <ImageResult 
                            objectID={object.objectID}
                            URL={object.primaryImage || "/src/assets/noImg.jpeg"}
                        />
                    </>
                )
            })}
            <button onClick={()=> {
                updateSelected([])
                if(loopNum >= searchResult.length){
                    updateloopNum(0)
                }
                }}>Next Set</button>
            </>
            : errorMessage}
        </div>
    );
}

export default Results;
