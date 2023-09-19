import React, { useEffect, useState } from 'react';
import ImageResult from '../common/ImageResult';
import {Link} from 'react-router-dom'
import { getObjects } from '../common/apicalls';

const Results = ({
        searchResult, 
        savedFavorites, 
        updateSavedFavorites,
        cachedData,
        updateCachedData
    }) => {

    const [page, updatePage] = useState(1)
    const [selected, updateSelected] = useState(searchResult.slice(0,(4*page)))
    const [onScreen, updateOnScreen] = useState(<div>Bonk</div>)
    
    const changePage = () => {

    }
    
    useEffect (() => {

        getObjects(selected)
        .then((res)=> {
          return res.map((object) => {
              return (
                <>
                    <h1>{object.objectID}</h1>
                    <ImageResult 
                        objectID={object.objectID}
                        URL={object.primaryImage || "/src/assets/noImg.jpeg"}
                        />
                </>
            )
         })
        })
        .then((html)=> {
           updateOnScreen(html) 
        })


    //         
    //      :    (
    //         <>
    //             <h1>An error has occured.</h1>
    //             <h2>Please return <Link to="/">home</Link> and try again.</h2>
    //         </>
    //             )
        
    // }
    } ,[])


    return (
        <div className='Results'>
            {onScreen}
        </div>
    );
}

export default Results;
