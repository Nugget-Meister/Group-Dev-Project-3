import React from 'react';
import {Link} from 'react-router-dom'

import { useState, useEffect } from 'react';
import { getObjects } from '../common/apicalls';
import ImageResult from '../common/ImageResult';
import '../Favorites/Favorites.css'

import dummyinfo from '../common/dummyinfo';


const Favorites = ({
    savedFavorites,
    handleFavorite,
    updateSavedFavorites
}) => {
const [favoritesList, updateFavoritesList] = useState(Object.keys(savedFavorites).filter((key) => savedFavorites[key]))
const [selected, updateSelected] = useState([])
const [loopNum, updateloopNum] = useState(0)


    console.log(dummyinfo,savedFavorites)

    useEffect (() => {
        setTimeout(() => {

            if(favoritesList.length > 0) {
                let thisID = favoritesList[loopNum]
                if(favoritesList.length < 4 && loopNum < favoritesList.length){
                    // console.log(`Searching: ${thisID}. ${loopNum}/${favoritesList.length}`,)
                    // console.log(`${selected.length}/4 slots used`)
                    let find = dummyinfo.dummy.filter(object => {
                        return String(object.objectID) == thisID
                    })
                    updateSelected([...selected, ...find])
                    updateloopNum(loopNum+1)

                    // getObjects(favoritesList[loopNum])
                    // .then(result => {
                    //     // console.log(result, !!result.primaryImage)
                    //     if(!!result.primaryImage){
                    //         updateSelected([...selected, result])
                    //     } else {
                    //         console.log("Image not found, trying ",favoritesList[loopNum])
                    //     }
                    //     updateloopNum(loopNum+1)
                    // })
                    // .catch(error =>{
                    //     console.log(error)
                    //     updateloopNum(loopNum+1)
                    // })
                }
            }
            

        }, 1000)
    } ,[loopNum])

    const message = (
        <div className='message'>
            <h1>You haven't saved any favorites... </h1>
            <h3> Go find some <Link to='/search'>here</Link>!</h3>
        </div>
        )

        console.log(selected)

    return (
        <div className="Favorites">
            <div className="resultList">
                {selected.length > 0 ? selected.map((object) => {
                    return (
                            <ImageResult 
                                objectID={object.objectID}
                                name={object.title}
                                URL={object.primaryImage || "/src/assets/noImg.jpeg"}
                                updateSavedFavorites={updateSavedFavorites}
                                savedFavorites={savedFavorites}
                                handleFavorite={handleFavorite}
                            />
                    )
                }) : message}
            </div>
        </div>
    );
};

export default Favorites;
