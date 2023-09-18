import React, { useState } from 'react';
import ImageResult from '../common/ImageResult';
import {Link} from 'react-router-dom'
import { getObject } from '../common/apicalls';

const Results = ({
        searchResult, 
        savedFavorites, 
        updateSavedFavorites,
        cachedData,
        updateCachedData
    }) => {
    console.log(searchResult)

    const [page, updatePage] = useState(1)
    const [selected, updateSelected] = useState(searchResult.slice(0,(4*page)))

    // console.log(selected)
    console.log(cachedData)



    const changePage = () => {

    }


    return (
        <div className='Results'>
            {searchResult.length != 0 ? selected.map((result) => {
                return (
                <>
                    <h1>{result}</h1>
                    <ImageResult/>
                </>
                )
            }) :    (
                <>
                    <h1>An error has occured.</h1>
                    <h2>Please return <Link to="/">home</Link> and try again.</h2>
                </>
                    )
            
        }
        </div>
    );
}

export default Results;
